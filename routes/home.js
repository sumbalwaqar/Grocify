const Products = require('../models/products');
function home() {
    return{
        async index(req,res,next) {
            try {
                const productItems = await Products.find();
                console.log("Product items fetched:" , productItems);
                return res.render('index', { productItems: productItems });

            } catch (error) {
                console.log("Error fetching product items:" , error);
                return res.status(500).send("Internal server error");
            } 
    }
    };
}

module.exports = home;
           






