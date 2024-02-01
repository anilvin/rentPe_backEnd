const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const passport = require("passport");


var userProfile;


passport.use(
    new GoogleStrategy({
        clientID:process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL:"/auth/google/callback",
        scope:["profile","email"],
    },
    function(accessToken, refreshToken,profile,callback){
        userProfile= profile;
        return callback(null, userProfile);
    })
)

passport.serializeUser((user, done) => {
    done(null, user); // Assuming user has an 'id' property
  });
  
passport.deserializeUser((user, done)=>{
      done(null, user)
  });




