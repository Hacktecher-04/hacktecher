# Users/Register Endpoint Documentation

## HTTP Details
- **Method:** POST
- **Content-Type:** application/json
- **Endpoint URL:** `/users/register`
- **Note:** Ensure the request header accepts JSON responses.

## Description
The `/users/register` endpoint registers a new user into the system.
<!-- Additional HTTP related usage:
     - Use secure URLs (HTTPS) in production.
     - Sends back JWT token upon successful registration.
-->

## Required Data
- **fullname:** Object containing:
  - `firstname`: (String) Minimum 3 characters.
  - `lastname`: (String) Minimum 3 characters (optional if not required).
- **email:** (String) Valid email with at least 5 characters.
- **password:** (String) Minimum 6 characters.

## Status Codes
- **201 Created:** Registration successful. Returns an authentication token and user details.
- **400 Bad Request:** Invalid input data or validation errors.

## Example Request (JSON)
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

## Example Response (JSON)
```json
{
  "token": "generated_jwt_token",
  "user": {
    // ...user details...
  }
}
```

## Users/Login Endpoint Documentation

### HTTP Details
- **Method:** POST
- **Content-Type:** application/json
- **Endpoint URL:** `/users/login`
- **Note:** Ensure the request header accepts JSON responses.

### Description
The `/users/login` endpoint authenticates an existing user and returns an authentication token.

### Required Data
- **email:** (String) Valid email.
- **password:** (String) Minimum 6 characters.

### Status Codes
- **200 OK:** Login successful. Returns an authentication token and user details.
- **400 Bad Request:** Invalid input data or validation errors.
- **401 Unauthorized:** Invalid email or password.

### Example Request (JSON)
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```

### Example Response (JSON)
```json
{
  "token": "generated_jwt_token",
  "user": {
    // ...user details...
  }
}
```
