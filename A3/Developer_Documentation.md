# INFT 2201 Assignment 3 Developer Documentation

## Project Overview

This project is a Dockerized Node.js and Express API that demonstrates:

- JWT authentication
- Protected routes
- Role-Based Access Control (RBAC)
- Request logging with unique request IDs
- In-memory rate limiting
- Centralized error handling

The API allows authenticated users to access mail resources according to their assigned role and ownership permissions.

---

# Running the Application

## Start Docker

From the project root directory:

```bash
docker compose up --build -d
```

## Verify Container Status

```bash
docker compose ps
```

## View Logs

```bash
docker compose logs
```

Follow logs in real time:

```bash
docker compose logs -f
```

## Rebuild the Application

If changes are not reflected automatically:

```bash
docker compose down
docker compose up --build -d
```

---

# Base URL

```text
http://localhost:3000
```

---

# Authentication

## Authentication Flow

1. User submits credentials to `/auth/login`.
2. The API validates the username and password.
3. If valid, the API returns a JWT.
4. The client includes the JWT in the Authorization header.
5. Protected routes verify the JWT before processing requests.

---

## Login Request Format

### Endpoint

```text
POST /auth/login
```

### Request Body

```json
{
  "username": "user1",
  "password": "user123"
}
```

### Successful Response

```json
{
  "token": "YOUR_TOKEN_HERE"
}
```

---

## JWT Payload

The JWT contains:

```json
{
  "userId": 1,
  "role": "user"
}
```

The token also contains an expiration date.

Passwords are never included in the JWT.

---

## Authorization Header

Protected routes require the following header:

```http
Authorization: Bearer YOUR_TOKEN_HERE
```

### What Does Bearer Mean?

Bearer authentication means that the client is authorized by presenting a valid token.

The server extracts the token following the word:

```text
Bearer
```

and verifies it using the configured JWT secret.

---

# Role-Based Access Control (RBAC)

## Admin Users

Users with the role:

```text
admin
```

may view any mail item in the system.

## Regular Users

Users with the role:

```text
user
```

may only view mail that they own.

---

## Ownership Rules

Ownership is determined using:

```js
mail.userId === user.userId
```

A mail item belongs to a user when both values match exactly.

---

# Available Endpoints

| Method | Route | Description |
|----------|----------|----------|
| GET | `/status` | Check API status |
| POST | `/auth/login` | Authenticate user and receive JWT |
| GET | `/mail/:id` | Retrieve a mail item if authorized |

---

# Endpoint Documentation

---

# GET /status

## Purpose

Confirms that the API is running.

## Authentication Required

No.

## Request Headers

None.

## Example Request

```bash
curl -i "http://localhost:3000/status"
```

## Example Response

```json
{
  "status": "ok"
}
```

## Possible Status Codes

- 200 OK

---

# POST /auth/login

## Purpose

Authenticates a user and generates a JWT.

## Authentication Required

No.

## Request Headers

```http
Content-Type: application/json
```

## Request Body

```json
{
  "username": "user1",
  "password": "user123"
}
```

## Example Request

```bash
curl -i -X POST "http://localhost:3000/auth/login" \
-H "Content-Type: application/json" \
-d "{\"username\":\"user1\",\"password\":\"user123\"}"
```

## Example Response

```json
{
  "token": "YOUR_TOKEN_HERE"
}
```

## Possible Status Codes

- 200 OK
- 400 Bad Request
- 401 Unauthorized
- 500 Internal Server Error

---

# GET /mail/:id

## Purpose

Returns a mail item when the authenticated user has permission to access it.

## Authentication Required

Yes.

## Request Headers

```http
Authorization: Bearer YOUR_TOKEN_HERE
```

## Path Parameters

| Parameter | Description |
|------------|------------|
| id | Mail identifier |

## Example Request

```bash
curl -i "http://localhost:3000/mail/1" \
-H "Authorization: Bearer YOUR_TOKEN_HERE"
```

## Example Response

```json
{
  "id": 1,
  "userId": 1,
  "subject": "Example Subject",
  "body": "Example Mail Content"
}
```

## Possible Status Codes

- 200 OK
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 429 Too Many Requests
- 500 Internal Server Error

---

# Protected Route Processing Order

Requests made to:

```text
GET /mail/:id
```

follow this middleware sequence:

```text
requestLogger
→ authenticateJWT
→ mail lookup
→ authorize(canViewMail)
→ route handler
```

The authenticated user is stored in:

```js
req.user
```

The requested mail object is stored in:

```js
req.mail
```

---

# Rate Limiting

## Purpose

Rate limiting prevents excessive requests from the same requester within a specified time window.

## Configuration Variables

The following environment variables are used:

```text
RATE_LIMIT_MAX
RATE_LIMIT_WINDOW_SECONDS
```

Example defaults:

```text
RATE_LIMIT_MAX=5
RATE_LIMIT_WINDOW_SECONDS=60
```

## Rate-Limit Behaviour

The API:

1. Tracks requests for each requester.
2. Allows requests up to the configured maximum.
3. Blocks additional requests once the limit is exceeded.
4. Resets counts when the time window expires.

---

# Retry-After Header

When rate limiting occurs, the API includes:

```http
Retry-After: 45
```

The value represents the approximate number of seconds a client should wait before trying again.

---

# Request Logging

Every request receives a UUID.

Example:

```text
REQUEST 72ba3c44-b26c-4fe2-a9ca-71a8b3ccb98a GET /mail/2
```

The request ID is stored in:

```js
req.requestId
```

---

# Request ID Usage

The request ID is used to:

- Track requests
- Trace errors
- Search server logs
- Connect client and server activity

Example error log:

```text
ERROR 72ba3c44-b26c-4fe2-a9ca-71a8b3ccb98a 403 Forbidden
```

If a user reports an error, the developer can use the request ID from the response to locate the matching log entry.

---

# Standard Error Response Format

All errors use a centralized JSON format.

Example:

```json
{
  "error": "Forbidden",
  "message": "User does not have permission to access this resource.",
  "statusCode": 403,
  "requestId": "72ba3c44-b26c-4fe2-a9ca-71a8b3ccb98a",
  "timestamp": "2026-03-27T12:34:56.000Z"
}
```

---

# Error Status Codes

| Status Code | Meaning |
|------------|------------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 403 | Forbidden |
| 404 | Not Found |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

---

# Example Responses

## Successful Status Request

### Request

```bash
curl -i "http://localhost:3000/status"
```

### Response

```json
{
  "status": "ok"
}
```

---

## Successful Login

### Response

```json
{
  "token": "YOUR_TOKEN_HERE"
}
```

---

## Successful Mail Access

### Response

```json
{
  "id": 1,
  "userId": 1,
  "subject": "Example Subject",
  "body": "Example Mail Content"
}
```

---

## Missing or Invalid Token

### Response

```json
{
  "error": "Unauthorized",
  "message": "Authentication token required.",
  "statusCode": 401,
  "requestId": "REQUEST_ID",
  "timestamp": "2026-01-01T12:00:00.000Z"
}
```

---

## Forbidden Mail Access

### Response

```json
{
  "error": "Forbidden",
  "message": "User does not have permission to access this resource.",
  "statusCode": 403,
  "requestId": "REQUEST_ID",
  "timestamp": "2026-01-01T12:00:00.000Z"
}
```

---

## Mail Not Found

### Response

```json
{
  "error": "Not Found",
  "message": "Mail item not found.",
  "statusCode": 404,
  "requestId": "REQUEST_ID",
  "timestamp": "2026-01-01T12:00:00.000Z"
}
```

---

## Rate Limit Exceeded

### Response Header

```http
Retry-After: 38
```

### Response Body

```json
{
  "error": "Too Many Requests",
  "message": "Rate limit exceeded. Please try again later.",
  "statusCode": 429,
  "requestId": "REQUEST_ID",
  "timestamp": "2026-01-01T12:00:00.000Z"
}
```

---

# AI Use Documentation

## Tool Information

### Tool

Microsoft Copilot (GPT-5)

### Provider

Microsoft

### Date Used

August 2026

### Files Assisted

- authenticateJWT.js
- authorize.js
- canViewMail.js
- isAdmin.js
- ownsResource.js
- rateLimit.js
- errorHandler.js
- dev-doc-template.md

### Purpose of Assistance

- JWT authentication implementation
- Authorization middleware design
- RBAC policy development
- Rate-limiting logic
- Error handling implementation
- Documentation writing

### Prompt Summary

Requested assistance with implementing JWT authentication, Express middleware, RBAC authorization, rate limiting, centralized error handling, and developer documentation.

### Suggestions Used

- JWT Bearer token parsing
- Reusable authorization middleware
- Policy composition for RBAC
- Rate-limit tracking logic
- Standardized JSON error responses
- Developer documentation structure

### Student Verification

All AI-generated suggestions were reviewed, modified where required, tested locally, and verified against assignment requirements before submission.

---

# APA Reference

Microsoft. (2026). *Microsoft Copilot (GPT-5) [Large language model].* https://copilot.microsoft.com