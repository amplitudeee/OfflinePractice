=== ORIGINAL FILE: INFT_2201_Assignment_3_V2.md ===

# INFT 2201 — Assignment 3

## Secure Routing, RBAC, Logging, Rate Limiting, and Documentation

**Technologies:** Node.js, Express, Docker, JWT

---

## ⚠️ Start Early

Assignment 3 continues the authentication and authorization concepts introduced in Assignment 2.

In Assignment 2, you worked with a multi-service application that used Node.js, PHP, PostgreSQL, Apache, and JWTs. In Assignment 3, you will apply similar security concepts to a **standalone Node.js and Express API**.

You will add:

* JWT authentication
* protected routes
* Role-Based Access Control (RBAC)
* reusable authorization policies
* request logging and request IDs
* rate limiting
* centralized error handling
* developer documentation

> **Important:** Assignment 3 does **not** reuse the Node + PHP + PostgreSQL architecture from Assignment 2. The concepts continue, but the starter project and folder structure are different.

A starter project is provided, so you do **not** need a completed or working Assignment 2 project to complete this assignment.

---

## 🎯 Assignment Goal

You will extend a working Dockerized Express API so that it can authenticate users, protect mail resources, enforce role-based access rules, identify and log requests, limit repeated requests, and return safe and consistent errors.

The main parts of the application are:

| Component | Responsibility |
| --------- | -------------- |
| Authentication route | Validates credentials and creates JWTs |
| Authentication middleware | Verifies JWTs and identifies the logged-in user |
| Mail route | Finds the requested mail, attaches it to the request, and returns it after authorization |
| Authorization policies | Decide whether a user is allowed to access a resource |
| Authorization middleware | Applies a policy to the current user and resource |
| Request logger | Creates and logs a unique request ID |
| Rate limiter | Restricts repeated requests within a time window |
| Error handler | Returns safe, consistent JSON error responses |
| Developer documentation | Explains how another developer can use the API |

---

## 🧠 Learning Outcomes

By completing this assignment, you will:

* Implement a login endpoint in Express
* Validate user credentials from starter data
* Create a signed JWT containing user information
* Read and verify an `Authorization: Bearer <token>` header
* Protect routes using Express middleware
* Apply Role-Based Access Control (RBAC)
* Build reusable authorization policy functions
* Locate the requested mail within the provided mail route before authorizing access
* Generate and log unique request IDs
* Implement basic in-memory rate limiting
* Pass errors through `next(err)`
* Return safe and consistent JSON from a centralized error handler
* Write clear developer documentation for an API
* Work with a Dockerized Node.js application

---

## 📁 Starter Project Structure

Unzip **assignment3-starter.zip**.

Your final project must keep this structure:

```text
/project-root
├── docker-compose.yml
│
└── api/
    ├── config/
    │   └── env.example
    │
    ├── data/
    │   ├── mail.js
    │   └── users.js
    │
    ├── docs/
    │   └── dev-doc-template.md
    │
    ├── middleware/
    │   ├── authenticateJWT.js
    │   ├── authorize.js
    │   ├── errorHandler.js
    │   ├── rateLimit.js
    │   └── requestLogger.js
    │
    ├── policies/
    │   ├── canViewMail.js
    │   ├── isAdmin.js
    │   └── ownsResource.js
    │
    ├── routes/
    │   ├── auth.js
    │   ├── mail.js
    │   └── status.js
    │
    ├── Dockerfile
    ├── package.json
    └── server.js
```

Some files contain starter code or comments showing where your work should be added.

> **Do not add new assignment files or folders.** Complete the required work using the files already provided.

All assignment work must remain inside the provided project structure.

---

## 🐳 Step 1 — Start Docker

Open **Command Prompt or PowerShell** in the root project folder containing `docker-compose.yml`.

### Build and start the container

```bash
docker compose up --build -d
```

### Check the container

```bash
docker compose ps
```

The API container should be running.

### View container logs

```bash
docker compose logs
```

To follow the logs while testing:

```bash
docker compose logs -f
```

Press `Ctrl + C` to stop following the logs. This does not stop the container.

### Rebuild after making changes

If your files are not being updated automatically through a Docker volume, rebuild the application:

```bash
docker compose down
docker compose up --build -d
```

---

## 🌐 Application URLs

The API is accessed through:

```text
http://localhost:3000
```

Required endpoints:

| Method | Endpoint | Purpose |
| ------ | -------- | ------- |
| `GET` | `/status` | Confirms that the API is running |
| `POST` | `/auth/login` | Authenticates a user and returns a JWT |
| `GET` | `/mail/:id` | Returns one mail item when access is allowed |

---

## ✅ Verify the Starter

Run:

```cmd
curl http://localhost:3000/status
```

### Expected response

```json
{"status":"ok"}
```

If `/status` works, the Docker setup is correct and you can begin the assignment.

If you use PowerShell and `curl` behaves differently than expected, use:

```powershell
curl.exe http://localhost:3000/status
```

---

## 🧭 How a Protected Request Is Processed

A request to a protected mail route should pass through the existing files in a clear order.

For `GET /mail/:id`, the expected processing order is:

```text
requestLogger
→ authenticateJWT
→ find the requested mail in routes/mail.js
→ authorize(canViewMail)
→ route handler
```

The mail lookup belongs inside:

```text
/api/routes/mail.js
```

That route must find the mail in `api/data/mail.js`, attach it to `req.mail`, and then continue to `authorize(canViewMail)`.

If any step encounters an error, it should call:

```js
next(err);
```

Express then skips the remaining normal middleware and sends the error to the centralized `errorHandler`.

The `errorHandler` must be registered **after all routes and other middleware**.

> **Status-code distinction:** A missing or invalid token is a `401 Unauthorized` error. A validly authenticated user who does not have permission to access a resource receives `403 Forbidden`.

---

# Part 1 — Authentication and JWTs

## Files to Modify

```text
/api/routes/auth.js
/api/middleware/authenticateJWT.js
```

Use the provided user data from:

```text
/api/data/users.js
```

Do not replace the starter user data with hard-coded login checks inside the route.

---

## Required Login Endpoint

Implement:

```text
POST /auth/login
```

---

## Request Body

The endpoint must accept JSON in this format:

```json
{
  "username": "user1",
  "password": "user123"
}
```

Use the accounts provided in `api/data/users.js` when testing.

---

## Required Login Behaviour

Your login route must:

1. Read the JSON request body
2. Validate that `username` and `password` were provided
3. Find the matching user in `api/data/users.js`
4. Verify the supplied password
5. Create a signed JWT when the credentials are valid
6. Return the JWT as JSON
7. Pass errors to `next(err)` instead of sending error responses directly from the route

For security, an unknown username and an incorrect password should both be treated as invalid credentials and return `401 Unauthorized`.

---

## Required JWT Payload

The token must contain at least:

```json
{
  "userId": 1,
  "role": "user"
}
```

The `userId` must remain the correct data type used by the starter data. If the starter stores it as a number, the token must also contain a number.

The token should also include an expiry using the `expiresIn` option when calling `jwt.sign(...)`.

Do not include the user's password in the JWT.

---

## JWT Secret

Use the environment variable:

```text
JWT_SECRET
```
This can be found in the docker-compose.yml in the route of your project.

The login route and `authenticateJWT` middleware must use the same environment variable.

Do not hard-code the JWT secret separately in multiple files.

If `JWT_SECRET` is missing, the application should not silently use an insecure or blank secret.

---

## Required Login Responses

| Situation | Status Code | Result |
| --------- | ----------- | ------ |
| Successful login | `200` | Returns `{ "token": "..." }` |
| Missing username or password | `400` | Passes a Bad Request error to `next(err)` |
| Invalid username or password | `401` | Passes an Unauthorized error to `next(err)` |
| Unexpected server error | `500` | Handled safely by the centralized error handler |

### Successful response example

```json
{
  "token": "YOUR_JWT_TOKEN"
}
```

All successful and error responses must use JSON.

---

## `authenticateJWT` Middleware

The middleware must read this request header:

```text
Authorization: Bearer <token>
```

It must:

1. Read the `Authorization` header safely
2. Confirm that the header uses the `Bearer` scheme
3. Extract the token without including the word `Bearer`
4. Verify the token using `jwt.verify(...)`
5. Use `process.env.JWT_SECRET`
6. Attach the decoded payload to:

```js
req.user
```

7. Call `next()` when the token is valid
8. Pass a `401 Unauthorized` error to `next(err)` when the token is missing, malformed, invalid, or expired

> ❗ Do not send an error response directly from `authenticateJWT`. The centralized error handler is responsible for formatting the response.

---

# Part 2 — Mail RBAC and Route Protection

## Goal

Protect `GET /mail/:id` so that users can only access mail allowed by their role and ownership.

---

## Files to Modify

```text
/api/data/mail.js
/api/policies/isAdmin.js
/api/policies/ownsResource.js
/api/policies/canViewMail.js
/api/middleware/authorize.js
/api/routes/mail.js
```
---

## Access Rules

| User | Access |
| ---- | ------ |
| `admin` | May view any mail item |
| `user` | May view only mail where `mail.userId` matches the logged-in user's `userId` |

A user must be authenticated before RBAC is checked.

---

## Mail Lookup in `routes/mail.js`

Before authorization can run, the requested mail item must be found using the existing route file.

Inside `api/routes/mail.js`, the mail route must:

1. Read the mail ID from `req.params.id`
2. Validate or safely interpret the ID
3. Find the matching mail item in `api/data/mail.js`
4. Pass a `404 Not Found` error to `next(err)` when the mail does not exist
5. Attach the matching mail item to:

```js
req.mail
```

6. Continue to `authorize(canViewMail)` after the mail has been found

The mail lookup and route chain must remain in `api/routes/mail.js`.

---

## Policy Functions

Policy functions should return `true` or `false`. They should not send responses and should not call `next()`.

### `isAdmin(user)`

Returns `true` when:

```js
user.role === "admin"
```

Otherwise, it returns `false`.

---

### `ownsResource(user, mail)`

Returns `true` when:

```js
mail.userId === user.userId
```

Otherwise, it returns `false`.

Use consistent data types so that strict comparison works correctly.

---

### `canViewMail(user, mail)`

Returns `true` when:

* the user is an admin; **or**
* the user owns the mail item

This policy should reuse `isAdmin` and `ownsResource` rather than repeating the same authorization logic.

---

## `authorize(policy)` Middleware

`authorize` must be a reusable middleware factory.

It must:

1. Receive a policy function
2. Read the logged-in user from `req.user`
3. Read the loaded resource from `req.mail`
4. Call the policy using the user and resource
5. Call `next()` when the policy returns `true`
6. Pass a `403 Forbidden` error to `next(err)` when the policy returns `false`

Conceptual use:

```js
authorize(canViewMail)
```

Do not hard-code the `canViewMail` rules directly inside the generic `authorize` middleware.

---

## Required Mail Endpoint

Implement or complete:

```text
GET /mail/:id
```

The route must use this processing order:

```text
authenticateJWT
→ find the mail in routes/mail.js and attach it to req.mail
→ authorize(canViewMail)
→ route handler
```

The final route handler should return the authorized mail item from `req.mail`.

---

## Required Mail Behaviour

| Situation | Status Code | Result |
| --------- | ----------- | ------ |
| Valid admin requests any existing mail | `200` | Returns mail JSON |
| Valid user requests their own mail | `200` | Returns mail JSON |
| Valid user requests another user's mail | `403` | Forbidden error |
| Mail ID does not exist | `404` | Not Found error |
| Authorization header is missing | `401` | Unauthorized error |
| Token is invalid or expired | `401` | Unauthorized error |

All error responses must be formatted by the centralized error handler.

---

# Part 3 — Request Logging and Request IDs

## Goal

Attach a unique request ID to every request and include it in logs and error responses.

---

## Files to Modify

```text
/api/middleware/requestLogger.js
/api/middleware/errorHandler.js
/api/server.js
```

---

## `requestLogger` Middleware

The middleware must:

1. Generate a UUID for every incoming request
2. Store it in:

```js
req.requestId
```

3. Log the request using this general format:

```text
REQUEST <requestId> <method> <path>
```

Example:

```text
REQUEST 72ba3c44-b26c-4fe2-a9ca-71a8b3ccb98a GET /mail/2
```

You may use Node's built-in `crypto.randomUUID()` function.

Register `requestLogger` early in `server.js`, before protected routes and before middleware that may create errors. This ensures that authentication, authorization, rate-limit, and not-found errors can all include a request ID.

---

## Error Logging

When an error occurs, the server-side log must also include the request ID.

Example format:

```text
ERROR <requestId> <statusCode> <message>
```

The exact spacing may vary, but the request ID, status code, and useful error message must be visible in the server logs.

Do not return full internal error details or stack traces to the client.

---

# Part 4 — Rate Limiting

## Goal

Add simple in-memory rate limiting to prevent one client from sending too many requests within a short period.

---

## Files to Modify

```text
/api/middleware/rateLimit.js
/api/server.js
```

You may apply the middleware globally in `server.js` or to a specific route in `api/routes/mail.js`, as long as the required behaviour can be demonstrated and tested.

---

## Configuration

Use these environment variables which again can be found in docker-compose.yml:

```text
RATE_LIMIT_MAX
RATE_LIMIT_WINDOW_SECONDS
```

The middleware must read the current values from the environment. Do not ignore the environment variables by using only hard-coded values.

If the starter configuration does not provide values, use sensible defaults:

```text
RATE_LIMIT_MAX=5
RATE_LIMIT_WINDOW_SECONDS=60
```

Convert environment-variable strings to numbers before using them in calculations.

---

## Rate-Limit Key

Use one of these approaches:

* `req.ip` for an IP-based limit; or
* `req.user.userId` for a logged-in-user limit

If you use `req.user.userId`, the rate limiter must run **after** `authenticateJWT`, because `req.user` does not exist before authentication.

An IP-based limiter may be applied globally before authentication.

---

## Required Rate-Limit Behaviour

Your middleware must:

1. Create a key for the current requester
2. Track the request count for that key
3. Track when the current time window began or will expire
4. Reset the count after the time window expires
5. Allow requests up to the configured maximum
6. Block requests that exceed the configured maximum
7. Use status code `429 Too Many Requests`
8. Include retry information in a response header or in the JSON error

The recommended retry header is:

```text
Retry-After
```

The value should indicate approximately how many seconds remain before the requester can try again.

To preserve centralized error handling, the rate limiter should pass a `429` error to `next(err)`. It may set the `Retry-After` header before passing the error.

> This assignment requires only an in-memory solution. It is acceptable for the stored request counts to reset when the Node container restarts.

---

# Part 5 — Centralized Error Handling

## Goal

Handle application errors in one place and return a consistent JSON format.

---

## File to Modify

```text
/api/middleware/errorHandler.js
```

Register the error handler at the end of `api/server.js`, after all routes and other middleware.

Express error-handling middleware must use four parameters:

```js
function errorHandler(err, req, res, next)
```

---

## Required Error Response Format

Error responses must follow this structure:

```json
{
  "error": "Forbidden",
  "message": "User does not have permission to access this resource.",
  "statusCode": 403,
  "requestId": "72ba3c44-b26c-4fe2-a9ca-71a8b3ccb98a",
  "timestamp": "2026-03-27T12:34:56.000Z"
}
```

The `timestamp` must be generated when the error response is created. Use a standard ISO date string, such as the value returned by:

```js
new Date().toISOString()
```

---

## Required Error-Handler Behaviour

The error handler must:

1. Read the error's status code when one has been provided
2. Default unexpected errors to `500 Internal Server Error`
3. Include `req.requestId` in the response
4. Include a timestamp
5. Log the error with the same request ID
6. Return JSON
7. Avoid returning stack traces
8. Avoid returning passwords, JWT secrets, internal file paths, or unnecessary implementation details
9. Use a safe generic message for unexpected `500` errors

The error handler should not expose an internal exception message to the client when that message contains sensitive or technical details.

---

## Required Status Codes

| Code | Meaning | Example |
| ---- | ------- | ------- |
| `400` | Bad Request | Required login information is missing |
| `401` | Unauthorized | Token is missing, invalid, or expired |
| `403` | Forbidden | Authenticated user lacks permission |
| `404` | Not Found | Requested mail or route does not exist |
| `429` | Too Many Requests | Rate limit has been exceeded |
| `500` | Internal Server Error | Unexpected server failure |

A missing route should also return a JSON `404` error through the centralized error handler rather than Express's default HTML response.

---

# Part 6 — Developer Documentation

## Goal

Document the completed API so that another developer can understand how to run it, authenticate, access protected routes, and interpret errors.

---

## File to Complete

```text
/api/docs/dev-doc-template.md
```
---

## Required Documentation Sections

Your developer documentation must explain:

* how to start the API with Docker
* the base URL
* the authentication flow
* the login request format
* the JWT response format
* the required `Authorization` header
* what `Bearer` means in the header
* the RBAC rules for `admin` and `user`
* how ownership is determined
* the available endpoints
* the rate-limit behaviour
* the rate-limit configuration variables
* the `Retry-After` information
* the standard error-response format
* the purpose of `requestId`
* how to use the request ID when checking server logs
* required AI-use documentation, or the no-AI declaration, in the same developer-documentation file

---

## Required Endpoint Documentation

Document each of these endpoints:

```text
GET /status
POST /auth/login
GET /mail/:id
```

For each endpoint, include:

* HTTP method
* route
* purpose
* authentication requirement
* required headers
* path parameters or request body
* possible status codes
* example request
* example response

---

## Required Examples

Your documentation must include examples of:

* a successful status request
* a successful login
* successful access to an allowed mail item
* a missing or invalid token response
* a forbidden mail request
* a mail-not-found response
* a rate-limited response

Use placeholders such as `YOUR_TOKEN_HERE` instead of publishing a working JWT.

The documentation must describe the API you actually implemented. Do not leave template instructions, placeholder explanations, or examples that conflict with your code.

---

# Part 7 — Testing Your Work

## Command-Line Notes

The following examples are written for **Command Prompt**.

If you use PowerShell, use `curl.exe` instead of `curl`.

Use the user accounts and mail ownership values provided in:

```text
/api/data/users.js
/api/data/mail.js
```

---

## 1. Test Status

```cmd
curl -i "http://localhost:3000/status"
```

Expected result:

```text
HTTP/1.1 200 OK
```

Expected JSON:

```json
{"status":"ok"}
```

---

## 2. Test Successful Login

```cmd
curl -i -X POST "http://localhost:3000/auth/login" -H "Content-Type: application/json" -d "{\"username\":\"user1\",\"password\":\"user123\"}"
```

Expected result:

```text
HTTP/1.1 200 OK
```

Expected JSON:

```json
{"token":"YOUR_JWT_TOKEN"}
```

Copy only the token value for later tests.

If the starter uses different credentials, replace the example values with an account from `api/data/users.js`.

---

## 3. Test Missing Login Information

```cmd
curl -i -X POST "http://localhost:3000/auth/login" -H "Content-Type: application/json" -d "{\"username\":\"user1\"}"
```

Expected result:

```text
HTTP/1.1 400 Bad Request
```

The response should use the standard JSON error format and include a request ID.

---

## 4. Test Invalid Login

```cmd
curl -i -X POST "http://localhost:3000/auth/login" -H "Content-Type: application/json" -d "{\"username\":\"user1\",\"password\":\"wrong-password\"}"
```

Expected result:

```text
HTTP/1.1 401 Unauthorized
```

---

## 5. Test Missing Token

```cmd
curl -i "http://localhost:3000/mail/1"
```

Expected result:

```text
HTTP/1.1 401 Unauthorized
```

---

## 6. Test Invalid Token

```cmd
curl -i "http://localhost:3000/mail/1" -H "Authorization: Bearer not-a-valid-token"
```

Expected result:

```text
HTTP/1.1 401 Unauthorized
```

---

## 7. Test Allowed Mail Access

Replace `YOUR_TOKEN_HERE` with a valid token. Choose a mail ID owned by that user in `api/data/mail.js`.

```cmd
curl -i "http://localhost:3000/mail/OWN_MAIL_ID" -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

Expected result:

```text
HTTP/1.1 200 OK
```

The response should contain the requested mail object.

---

## 8. Test Forbidden Mail Access

Use a regular-user token and choose an existing mail ID owned by a different user.

```cmd
curl -i "http://localhost:3000/mail/OTHER_USER_MAIL_ID" -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

Expected result:

```text
HTTP/1.1 403 Forbidden
```

---

## 9. Test Admin Access

Log in using the admin account provided in `api/data/users.js`. Copy the admin token and request mail owned by another user.

```cmd
curl -i "http://localhost:3000/mail/MAIL_ID" -H "Authorization: Bearer YOUR_ADMIN_TOKEN_HERE"
```

Expected result:

```text
HTTP/1.1 200 OK
```

---

## 10. Test Mail Not Found

Use a valid token and request an ID that does not exist.

```cmd
curl -i "http://localhost:3000/mail/99999" -H "Authorization: Bearer YOUR_TOKEN_HERE"
```

Expected result:

```text
HTTP/1.1 404 Not Found
```

---

## 11. Test Rate Limiting

Send more than `RATE_LIMIT_MAX` requests using the same rate-limit key before `RATE_LIMIT_WINDOW_SECONDS` has passed.

Expected result after the limit is exceeded:

```text
HTTP/1.1 429 Too Many Requests
```

The response must include the standard JSON error format and retry information. If you use the `Retry-After` header, include `-i` in your curl command so that the response headers are visible.

---

## Expected Behaviour Summary

| Test | Expected Result |
| ---- | --------------- |
| Status endpoint | `200` |
| Valid login | `200` and JWT |
| Missing login field | `400` |
| Invalid credentials | `401` |
| Missing token | `401` |
| Invalid or expired token | `401` |
| User accesses own mail | `200` |
| User accesses another user's mail | `403` |
| Admin accesses any existing mail | `200` |
| Mail does not exist | `404` |
| Rate limit exceeded | `429` |
| Unknown route | JSON `404` |

---

# Part 8 — What You Must Submit

Submit one ZIP file containing:

```text
/docker-compose.yml
/api/
```

Your ZIP file must include:

* all source code
* `package.json`
* completed developer documentation
* AI-use documentation or the no-AI declaration inside `api/docs/dev-doc-template.md`

The project must run using the submitted files and the documented Docker command.

Just zip up your whole project and should be fine.

---

# 📊 Rubric — 20 Marks

| Category | Marks | Details |
| -------- | ----- | ------- |
| Authentication and JWT | 4 | Correct `POST /auth/login`; validates required fields and credentials; creates a signed JWT with `userId`, `role`, and expiry; `authenticateJWT` safely verifies Bearer tokens and attaches `req.user` |
| RBAC and route protection | 4 | The requested mail is found in `routes/mail.js` before authorization; policies are reusable and correct; `authorize(policy)` works; admin can view any mail; users can view only their own mail; correct `401`, `403`, and `404` behaviour |
| Logging and request IDs | 3 | Every request receives a unique ID; request ID is stored on `req`; requests and errors are logged clearly; error responses contain the same request ID |
| Rate limiting | 3 | Reads environment configuration; tracks requests by a valid key; resets windows correctly; blocks exceeded requests with `429`; provides useful retry information |
| Centralized error handling | 3 | Errors use `next(err)`; error handler is registered last; responses are consistent JSON; proper status codes are used; no stack traces or sensitive internal details are returned |
| Developer documentation | 6 | Documentation is clear, accurate, and complete; required endpoints, authentication, RBAC, rate limits, error format, request IDs, examples, and required AI-use documentation are included in the provided documentation file |
| **Total** | **23** | |

Code readability, meaningful naming, formatting, comments, and correct submission structure are assessed throughout all rubric categories.

---

# Penalties

| Issue | Penalty |
| ----- | ------- |
| Missing required AI-use documentation | `-8` |
| Late submission | `-5.75` |
| Submitted after the late window | `-23` |

Penalties cannot reduce a grade below zero.

---

# General Code Quality Standards

Each human-edited JavaScript file should include a comment block near the top containing:

* your name
* date
* course
* filename
* brief description of the file

Example:

```js
/*
 * Name: Student Name
 * Date: 2026-07-01
 * Course: INFT 2201
 * Filename: authenticateJWT.js
 * Description: Verifies JWT Bearer tokens and attaches the decoded user to the request.
 */
```

Use:

* clear and descriptive variable and function names
* `const` and `let` instead of `var`
* readable formatting and consistent indentation
* useful comments that explain decisions or non-obvious logic
* small middleware and policy functions with one clear responsibility
* strict comparisons where data types are consistent
* environment variables for configuration values
* `next(err)` for errors that should reach the centralized handler

Avoid:

* hard-coded user IDs or roles in route logic
* hard-coded JWTs
* passwords inside JWT payloads
* duplicate RBAC logic in multiple files
* sending some errors directly while sending others through the error handler
* empty `catch` blocks
* stack traces or secrets in client responses
* changing starter data only to make broken authorization logic appear correct

You are responsible for understanding and explaining all submitted code.

---

# 🤖 Use of AI Tools — Required Documentation

The use of generative AI tools such as ChatGPT, Microsoft Copilot, GitHub Copilot, Gemini, or Claude is allowed for this assignment, but all meaningful AI assistance must be documented.

Failure to document AI usage will be treated as an academic-integrity issue and may receive the listed penalty.

---

## Where to Document AI Use

Do **not** create another file.

Add an **AI Use Documentation** section near the end of the existing file:

```text
/api/docs/dev-doc-template.md
```

AI-assisted code must also include nearby inline citation comments in the relevant JavaScript files.

If you did not use generative AI, include this statement in the AI Use Documentation section:

```text
I did not use generative AI to create, debug, or significantly revise this assignment.
```

---

## Required Information

For each AI tool or chat used, document:

* tool name
* company or provider
* date used
* file, feature, or problem the AI helped with
* a brief summary of the prompt or question
* a brief summary of the suggestion that you used
* what you changed, tested, or verified yourself
* a share link when the tool provides one and the link does not expose private information

Do not include passwords, JWTs, private tokens, or other sensitive information in a shared chat or documentation.

---

## Reference Requirement

Include an APA-style reference for each AI tool or chat used in the AI Use Documentation section.

Example:

```text
OpenAI. (2026). ChatGPT [Large language model]. https://chatgpt.com/share/your-link-here
```

Use the actual tool, provider, year, and share link that apply to your work. If a share link is unavailable, identify the tool and date clearly instead of inventing a link.

If you used multiple separate chats for different parts of the assignment, include multiple references.

---

## In-Code Citation Requirement

Where AI generated or significantly assisted with a section of logic, include a nearby inline comment.

Examples:

```js
// AI-assisted JWT header parsing logic (OpenAI, 2026).
```

```js
// Rate-window reset approach developed with assistance from ChatGPT (OpenAI, 2026).
```

The comment should identify the specific logic that received assistance. A single vague comment at the top of the project is not enough when AI was used in several different files.

---

## What Must Be Documented

Document AI use when it helped with:

* generating or rewriting code
* debugging an error
* designing middleware order
* creating authentication or authorization logic
* creating RBAC policy functions
* implementing rate-limit calculations
* designing the centralized error format
* writing or significantly rewriting developer documentation
* explaining how to implement a required feature when that explanation influenced the submitted work

---

## What Does Not Normally Require a Citation

You do not normally need to cite AI for:

* a quick definition used only for studying
* minor spelling or grammar correction
* a small syntax reminder that did not generate a meaningful part of the submitted solution

When unsure, document the assistance.

---

## Student Responsibility

AI documentation does not replace your responsibility for the assignment.

You must:

* understand the submitted code
* test all required behaviours
* correct suggestions that do not match the starter project
* remove unused or irrelevant generated code
* keep the required project structure unchanged
* be able to explain how your authentication, RBAC, logging, rate limiting, and error handling work

Submitting AI-generated code that you cannot explain may be treated as evidence that the work is not your own.

---

# Common Mistakes to Avoid

* Running Docker from the wrong folder
* Using `docker-compose` in one place and `docker compose` in another without knowing which command is installed
* Testing `http://localhost` without port `3000`
* Forgetting `express.json()` before reading `req.body`
* Returning an error directly from middleware instead of calling `next(err)`
* Registering `errorHandler` before the routes
* Defining an Express error handler with fewer than four parameters
* Forgetting the word `Bearer` in the Authorization header
* Passing the full `Bearer ...` string to `jwt.verify(...)` instead of extracting the token
* Using a different JWT secret for signing and verification
* Including a password in the JWT payload
* Attaching decoded user data to the wrong property instead of `req.user`
* Calling authorization before the requested mail has been found in `routes/mail.js`
* Forgetting to attach the matching mail to `req.mail` before calling `authorize(canViewMail)`
* Returning `401` when a valid user lacks permission; this should be `403`
* Returning `403` for a mail item that does not exist when the route is expected to return `404`
* Repeating admin and ownership logic instead of composing policy functions
* Comparing numeric and string user IDs without considering data types
* Applying a user-ID rate limiter before authentication has created `req.user`
* Hard-coding rate-limit values and ignoring the environment variables
* Blocking the request that equals the maximum instead of the request that exceeds the maximum
* Forgetting to reset a request count after the time window expires
* Returning Express's default HTML error page instead of JSON
* Returning stack traces, JWT secrets, file paths, or internal implementation details
* Generating a request ID only for successful requests
* Creating a new request ID in the error handler instead of reusing `req.requestId`
* Leaving starter placeholders in the developer documentation
* Including a real JWT in the developer documentation
* Including `node_modules/` in the submitted ZIP
* Forgetting the AI Use Documentation section or no-AI declaration in `api/docs/dev-doc-template.md`
* Creating extra files or folders instead of completing the provided structure
* Using AI-generated code without the required documentation and inline citations

---

# Final Checklist

Before submitting, confirm:

- [ ] Docker builds and starts successfully
- [ ] The container is visible in `docker compose ps`
- [ ] `GET /status` returns `200` and JSON
- [ ] `POST /auth/login` accepts JSON credentials
- [ ] Missing login fields return `400`
- [ ] Invalid credentials return `401`
- [ ] Successful login returns a JWT
- [ ] The JWT contains `userId` and `role`
- [ ] The JWT has an expiry
- [ ] The password is not included in the JWT
- [ ] `authenticateJWT` reads a Bearer token safely
- [ ] Missing, invalid, and expired tokens return `401`
- [ ] The decoded payload is attached to `req.user`
- [ ] `routes/mail.js` finds an existing mail item and attaches it to `req.mail`
- [ ] A missing mail item returns `404`
- [ ] `isAdmin`, `ownsResource`, and `canViewMail` return correct Boolean values
- [ ] `authorize(policy)` is reusable
- [ ] A regular user can access their own mail
- [ ] A regular user receives `403` for another user's mail
- [ ] An admin can access any existing mail
- [ ] Every request receives a unique request ID
- [ ] Requests are logged with method and path
- [ ] Errors are logged with the same request ID
- [ ] Rate limiting reads both environment variables
- [ ] The rate limiter resets after the configured window
- [ ] Exceeded requests return `429`
- [ ] Rate-limit responses include retry information
- [ ] All errors use the standard JSON structure
- [ ] Error responses include `statusCode`, `requestId`, and `timestamp`
- [ ] No error response exposes a stack trace or secret
- [ ] Unknown routes return JSON `404`
- [ ] The developer documentation matches the completed API
- [ ] All required request and response examples are documented
- [ ] The AI Use Documentation section or no-AI declaration is included in `api/docs/dev-doc-template.md`
- [ ] AI-assisted code has nearby citations when required
- [ ] No extra assignment files or folders were added
- [ ] `node_modules/` and `.git/` are not included in the ZIP

