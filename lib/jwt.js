const jwt = require('jsonwebtoken');
module.exports = function (req, res, next) {
  //format of token
  // Authorization: Bearer <access_token>

  // Get auth header value.
  const bearerHeader = req.headers['authorization'];
  // check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearertoken = bearer[1];
    // Set the token
    req.token = bearertoken;
    // next middlware
    jwt.verify(req.token, 'theSecret', (err) => {
      if (err) return res.sendStatus(403);
        next();
    })
  } else {
    res.sendStatus(403);
  }
}
