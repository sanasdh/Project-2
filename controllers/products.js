const request = require('request');
let Cloth = require("../models/cloth")
let Product = require("../models/product")
const rootURL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

async function create(req, res, next) {
    let modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';

    const brand = req.query.brand;
    const product = req.query.product
    const productData = await Product.find({});

    // const userData = JSON.parse(body);
    // console.log("userdata", userData);
    Cloth.find(modelQuery).sort(sortKey).exec(function (err) {
        if (err) return next(err);
        console.log("product", product);
        console.log("brand", brand);
        res.render('clothes/new', {
            productData,
            user: req.user,
            name: req.query.name,
            sortKey,
            newBrand: brand,
            newProduct: product,
        });
    });

};
function show(req, res) {
    let modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
console.log("params", req.params);
    Product.find(req.params.id, function (err, product) {
        console.log("product", product);
        Cloth.find(modelQuery).sort(sortKey).exec(function (err) {
            res.render("clothes/show", {
                user: req.user,
                name: req.query.name,
                sortKey,
                product
            })
        })
    })
}

module.exports = {

    create: create,
    show: show

}
