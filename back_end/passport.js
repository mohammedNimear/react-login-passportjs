
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const GithubStrategy = require('passport-github2').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;

const GITHUB_CLIENT_ID = '0409803aede3a883b29d'
const GITHUB_CLIENT_SECRET = 'e1971dc40cc724a9a2085d80f588573334662bbf'

const FACEBOOK_APP_ID = '994743438351327'
const FACEBOOK_APP_SECRET = '8c98444fa44395fa7fde5f3f45920b11'


const GOOGLE_CLIENT_ID = '844709751231-1puo3nd36kap8c43li3i97ofvgoooq0d.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

passport.use(new GithubStrategy({

    clientID: GITHUB_CLIENT_ID,
    clientSecret: GITHUB_CLIENT_SECRET,
    callbackURL: "/auth/github/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile)
  }
));

passport.use(new GoogleStrategy({

  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null, profile)
}
));

passport.use(new FacebookStrategy({

  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_APP_SECRET,
  callbackURL: "/auth/facebook/callback"
},
function(accessToken, refreshToken, profile, done) {
  done(null, profile)
}
));

passport.serializeUser((user, done)=> {
    done(null, user)
})

passport.deserializeUser((user, done)=> {
    done(null, user)
})