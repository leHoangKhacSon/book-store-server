const jwt = require('jsonwebtoken');

module.exports.checkToken = (req, res, next) => {
  try {
    // fetch token in request
    const token = req.headers.authorization;
    // verify token
    jwt.verify(token, process.env.SECRET_KEY, (payload, err) => {
      if(payload) {
        req.user = payload;
        next();
      } else {
        // if token exists but not valid
        res.status(401).send('Unauthorized',err);
      }
    })
  } catch (error) {
    // if header don't has token
    res.status(401).send('No token provided');
  }
}

module.exports.protectedRoute = (req, res, next) => {
  // if req.user exists is token exists
  if(req.user) {
    return next();
  }
  res.status(401).send('anauthorized');
}