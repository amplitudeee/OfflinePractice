const express = require("express");
const jwt = require("jsonwebtoken");
const users = require("../data/users");

const router = express.Router();
const SECRET = process.env.JWT_SECRET || "CHANGE_ME_BEFORE_SUBMISSION";

// POST /auth/login
// Body: { username, password }
// On success: return a JWT that includes { userId, role } as claims.
router.post("/login", (req, res, next) => {
  // TODO: implement:
  const { username, password } = req.body;

  if (!username || !password)
  {
    next(err);
  }

  const user = users.find(...)

  user.password === password

  next(new Error("Login endpoint not implemented yet"));
});

module.exports = router;
