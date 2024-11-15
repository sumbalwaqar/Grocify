function cart() {
  return {
    index(req, res) {

      res.render('customers/cart');
    },
    update(req, res,next) {
      if (!req.session.cart) {
        req.session.cart = {
          items: {},
          totalqty: 0,
          totalprice: 0
        };
      }

      const cart = req.session.cart;
      console.log(cart);
      
      if (!cart.items[req.body._id]) {
        cart.items[req.body._id] = {
          item: req.body,
          qty: 1

        };
        cart.totalqty += 1;
        cart.totalprice += req.body.price
      }else{
        cart.items[req.body._id].qty += 1;
        cart.totalqty += 1;
        cart.totalprice += req.body.price;
      }

    return res.json({ totalqty: cart.totalqty });
    }
  }
}

module.exports = cart;
