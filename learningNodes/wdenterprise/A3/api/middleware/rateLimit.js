=== ORIGINAL FILE: api\middleware\rateLimit.js ===

// Simple in-memory rate limiter for demo purposes.
// Requirements:
// - Track requests per IP OR per authenticated user
// - Limit to RATE_LIMIT_MAX requests per RATE_LIMIT_WINDOW_SECONDS
// - If exceeded, pass a 429 Too Many Requests error to next(err)
// - Include retry information in the final error response

const windowMs =
  (parseInt(process.env.RATE_LIMIT_WINDOW_SECONDS, 10) || 60) * 1000;
const maxRequests = parseInt(process.env.RATE_LIMIT_MAX, 10) || 5;

const buckets = new Map();
// shape:
// key -> { count, windowStart }

module.exports = function rateLimit(req, res, next) {
  // TODO: implement a fixed-window or rolling-window rate limiter
  // - choose a key such as req.ip or req.user?.userId
  // - track requests in buckets
  // - if the limit is exceeded, pass a rate-limit error to next(err)

  next();
};
