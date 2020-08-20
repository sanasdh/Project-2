const request = require('request');
let Cloth = require("../models/cloth")
let Product = require("../models/product")
const rootURL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

async function create(req, res, next) {
    let modelQuery = req.query.name ? { name: new RegExp(req.query.name, 'i') } : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';

    const brand = req.query.brand;
    const product = req.query.product;
    const productData = await Product.find({});
    let a = 0, c = 0;
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
            a,
            c
        });
    });

};
function show(req, res) {
    Product.find({ "_id": req.params.id }, function (err, product) {
        Cloth.findById(req.user, function (err, cloth) {
            // console.log("in show product");
            // console.log("cloth", cloth);
            // console.log("req.user.id",req.user.id);
            // console.log("req.user",req.user);
            // console.log("req.params.id", req.params.id);
            res.render("clothes/show", {
                user: req.user,
                product,
                cloth
            })
        })
    })
}

module.exports = {

    create: create,
    show: show

}
