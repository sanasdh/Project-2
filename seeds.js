// utility to initialize database
require('./config/database');
const Cloth = require('./models/cloth');
const Product = require('./models/product');
const p1 = Cloth.deleteMany({});
const p2 = Product.deleteMany({});
const data = require('./data');
const fetch = require("node-fetch");
// clear out to prevent dublicates
// Promise.all([p1, p2])

fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
    .then(response => response.json())
    .then(async function (result) {
        for (product of result) {
            const newProduct = new Product(product)
           await newProduct.save()
        }
        return result
    })
    .then(async function (product) {
        let result = await Product.find({})
        console.log(result)
    
    })
    .then(function () {
        process.exit();
    });

// const request = require('request');
// let Cloth = require("../models/cloth")
// let Product = require("../models/product")
// const rootURL = 'http://makeup-api.herokuapp.com/api/v1/products.json';

//     request(rootURL, function (err, response, body) {
//         const productData = JSON.parse(body);
//         // console.log("userdata", userData);
//         productData.foreach(function(product){
//             product= new Product(req.body)
//             product.save
//         })
//     })

// console.log(product);