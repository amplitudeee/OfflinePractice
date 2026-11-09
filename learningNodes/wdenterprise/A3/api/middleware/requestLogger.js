const { v4: uuidv4 } = require("uuid");

// TODO: Implement request logging middleware.
// Requirements:
// - Generate a requestId using uuidv4().
// - Attach it to req.requestId.
// - Log method, path, and requestId.
// - Example log format:
//   REQUEST <requestId> <method> <path>

module.exports = function requestLogger(req, res, next) {
  // TODO: implement
  next();
};
