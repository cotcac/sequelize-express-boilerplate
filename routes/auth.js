const express = require('express');
const router = express.Router();
const passport = require('passport');
const bcrypt = require('bcryptjs'); //encrypt password
const userMdl = require('../db/mdl_users');
const LocalStrategy = require('passport-local').Strategy;
const jwt = require('jsonwebtoken');

passport.serializeUser(function(result, done) {
  done(null, result._id);
});
// used to deserialize the user.
passport.deserializeUser(function(id, done) {
  userMdl.findOneWhere({
    _id: id
  }, function(err, user) {
    return done(err, user);
  });
});

// LOCAL STRATEGY

passport.use(new LocalStrategy({
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true
}, function(req, email, password, done) {
  userMdl.findOneWhere({
    email: email
  }, function(err, result) {
    if (err) {
      return done(err);
    }
    if (!result) {
      return done(null, false);
    }
    if (!(bcrypt.compareSync(password, result.password))) {
      return done(null, false);
    }
    // all is well, return successful user
    return done(null, result);
  })
}));
router.post('/login', function(req, res, next) {
  passport.authenticate('local', function(err, user) {
    if (err) { return next(err); }
    if (!user) {
      return res.json({err:'Wrong id/password'})
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      jwt.sign({user}, 'theSecret', (err, token) => {
        res.status(200).json({token})
      })
    });
  })(req, res, next);
});

// logout
router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/')
}); // end logout.

module.exports = router;
