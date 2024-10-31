var express = require('express');
var router = express.Router();
const cart = require('./cart');
const home = require('./home');
const auth = require('./auth');

/* GET home page. */
router.get('/', home().index);
router.get('/cart', cart);
router.get('/login', auth().login);
router.get('/register', auth().register); 


module.exports = router;
