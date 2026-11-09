=== ORIGINAL FILE: api\docs\dev-doc-template.md ===

# Assignment 3 – Developer Documentation

## 1. Overview

Briefly describe what your API does and its main purpose.
My API logs requests
My API Creates tokens for users instead of using usernames and passwords for not only logins but also authorization for different levels of access control. Role Based Access Control.
My API

---

## 2. Authentication

### 2.1 Auth Method

Describe how a client authenticates with your API.

Include:
- the endpoint used
- the request body format
- the success response format

### 2.2 Using the Token

Explain how the JWT is used in later requests.

Include:
- the required Authorization header format
- any token expiry behavior

---

## 3. Roles & Access Rules

Describe the roles used in your API and what each role is allowed to do.

You may include a table if helpful.

---

## 4. Endpoints

### 4.1 `POST /auth/login`

Describe:
- purpose
- request body
- success response
- common failure cases

### 4.2 `GET /mail/:id`

Describe:
- purpose
- authentication requirement
- access rules
- success response
- forbidden response
- not found response

### 4.3 `GET /status`

Describe:
- purpose
- whether authentication is required
- example response

---

## 5. Rate Limiting

Describe how rate limiting works in your implementation.

Include:
- what key you used (IP or authenticated user)
- the request limit
- the time window
- what response is returned when the limit is exceeded

Mention whether you include retry information in a header or JSON body.

---

## 6. Error Response Format

Describe the standard JSON error format returned by your API.

Include:
- the general structure
- common error categories your API uses

---

## 7. Example Flows

### 7.1 Happy Path

Show one complete successful example flow from login to accessing a protected resource.

### 7.2 Error Path

Show one complete error example, such as a forbidden request or invalid login.
