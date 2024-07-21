const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const jwt = require('jsonwebtoken');
const { googleClientID, googleClientSecret, jwtSecret } = require('../config/config');

passport.use(new GoogleStrategy({
  clientID: googleClientID,
  clientSecret: googleClientSecret,
  callbackURL: "/api/auth/google/callback"
}, (accessToken, refreshToken, profile, done) => {
  done(null, profile);
}));

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

const googleAuth = (req, res) => {
  passport.authenticate('google', { scope: ['profile', 'email'] })(req, res);
};

const googleAuthCallback = (req, res,next) => {
  passport.authenticate('google', (err, user) => {
    if (err) {
      return res.redirect('/auth/failure');
    }
    const token = jwt.sign({ id: user.id }, jwtSecret, {
      expiresIn: '30d',
    });
    res = {user, local: token}
  })(req, res, next());
};

module.exports = {
  googleAuth,
  googleAuthCallback,
};
