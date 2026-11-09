const jwt = require("jsonwebtoken");

const SECRET = process.env.JWT_SECRET || "CHANGE_ME_BEFORE_SUBMISSION";

// TODO: Implement authenticateJWT middleware.
// Requirements:
// - Read Authorization header: "Bearer <token>"
// - Verify token using jwt.verify(token, SECRET)
// - If valid, attach decoded payload to req.user
// - If missing, invalid, or expired, pass an error to next(err)
// - Do not send the response directly from this middleware

module.exports = function authenticateJWT(req, res, next) {
  // TODO: implement
  next(new Error("authenticateJWT not implemented yet"));
};
