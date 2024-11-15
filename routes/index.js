var express = require('express');
var router = express.Router();
const cart = require('./cart');
const home = require('./home');
const auth = require('./auth');
const guest = require('./middlewares/guest');

/* GET home page. */
router.get('/', home().index);
router.get('/cart', cart().index);
router.post('/update-cart',cart().update);
router.get('/login',guest, auth().login);
router.post('/login', auth().Postlogin);
router.get('/register',guest,  auth().register); 
router.post('/register', auth().Postregister);
router.post('/logout', auth().Logout),

module.exports = router;
