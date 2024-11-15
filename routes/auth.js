const passport = require('passport');
const User = require('../models/user');
const bcrypt = require('bcrypt');
function auth() {
  return {
    login(req, res, next) {
      res.render('auth/login');
    },
    register(req, res, next) {
      res.render('auth/register');
    },
    async Postregister(req, res, next) {
      const { name, email, password } = req.body;
      if (!name || !email || !password) {
        req.flash('error', 'All fields are required');
        req.flash('name', name);
        req.flash('email', email);
        return res.redirect('/register');
      }
      try {
        if (await User.exists({ email })) {
          req.flash('error', 'Email already exists');
          req.flash('name', name);
          req.flash('email', email);
          return res.redirect('/register');
        }
        const hashedpassword = await bcrypt.hash(password, 10);
        await new User({ name, email, password: hashedpassword }).save();
        req.flash('success', 'Registration successful');
        return res.redirect('/');
      }
      catch (err) {
        req.flash('error', "Error while registering");
        return res.redirect('/register');
      }
    },
    Postlogin(req, res, next) {
      passport.authenticate('local', (err, user, info) => {
        if (err) {
        return next(err);
        }
        if (!user) {
        req.flash('error',info.message || "login failed");
        return res.redirect('/login');
        }
        req.logIn(user, (err) => {
        if (err) {
            return next(err);
        }
        return res.redirect('/');
        });
      })(req, res, next);
    },
    Logout(req, res, next) {
      req.logout((err) => {
        if (err) {
          return next(err);
        }
      res.redirect('/');
      });
    }
  };
}
module.exports = auth;