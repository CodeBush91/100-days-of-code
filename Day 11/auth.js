"use strict"

const passport = require('koa-passport'),
    GithubStrategy = require('passport-github').Strategy;

passport.use(new GithubStrategy({
    clientID: '8fee08d2b32561554e23',
    clientSecret: '3bfab189baa39d7d69513bd9426676897139c931',
    callbackURL: "http://localhost:3000/auth/github/callback"
 },
 
 function(accessToken, refreshToken, profile, done){
     let user = profile;
     return done(null, user);
 })
);

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

module.exports = passport;