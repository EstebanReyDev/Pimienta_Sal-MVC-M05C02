const { getProducts, getAbout } = require('../db/dataBase');

module.exports = {
    index: (req, res) => {
        res.render('index', {products: getProducts, about: getAbout});
    },
    menuDetail: (req, res) => {

        let plateRequiredId = +req.params.id;
        let plateRequired = getProducts.find(product => {
            if(product.id === plateRequiredId) {
                return product;
            }
        })

        res.render('detalleMenu', {plateRequired})
    }
}