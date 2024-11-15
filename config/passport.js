const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/user');
const bcrypt = require('bcrypt');
function init (passport) {
passport.use(new LocalStrategy({
    usernameField: 'email' // Configures the strategy to use 'email' instead of 'username'
},
async (email, password, done) => {
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            // No error, but user not found; done(null, false) signals "no user found"
            return done(null, false, { message: 'No user with this email' });
        }
        // Check password match
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            return done(null, user); // Success, user is returned
        } else {
            // No error, but incorrect password
            return done(null, false, { message: 'Incorrect password' });
        }
    } catch (error) {
        return done(error); // Error encountered, handled by Passport as an error
    }
}));
// Store user id in the session
passport.serializeUser((user, done) => {
    done(null, user.id);
});
// Retrieve user from the session
passport.deserializeUser((id,done)=> {
    User.findById(id)
    .then(user => done(null, user))
    .catch(err => done(err));
});
}
module.exports = init;



