// Generic authorization middleware.
// The supplied policy function receives (user, resource)
// and must return true or false.

module.exports = function authorize(policy) {
  return (req, res, next) => {
    // TODO: implement:
    // - Read req.user
    // - Read req.mail (or another loaded resource if needed)
    // - Call policy(req.user, req.mail)
    // - If allowed, call next()
    // - Otherwise, pass a 403 Forbidden error to next(err)

    next(new Error("authorize middleware not implemented yet"));
  };
};
