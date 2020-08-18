const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const Clothing = require('../models/cloth');
console.log(process.env.GOOGLE_CLIENT_ID);
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
  },
  function(accessToken, refreshToken, profile, cb) {
    Clothing.findOne({ 'googleId': profile.id }, function(err, clothe) {
        if (err) return cb(err);
        if (clothe) {
          return cb(null, clothe);
        } else {
          // we have a new user via OAuth!
          var newClothing = new Clothing({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id
          });
          newClothing.save(function(err) {
            if (err) return cb(err);
            return cb(null, newClothing);
          });
        }
      });
    }
  ));
  passport.serializeUser(function(clothe, done) {
    done(null, clothe.id);
});
passport.deserializeUser(function(id, done) {
    Clothing.findById(id, function(err, clothe) {
      done(err, clothe);
    });
  });