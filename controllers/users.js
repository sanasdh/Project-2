let Cloth = require("../models/cloth")

function index(req, res, next) {
    console.log(req.query)
    // Make the query object to use with Student.find based up
    // the user has submitted the search form or now
    let modelQuery = req.query.name ? {name: new RegExp(req.query.name, 'i')} : {};
    // Default to sorting by name
    let sortKey = req.query.sort || 'name';
    Cloth.find(modelQuery)
    .sort(sortKey).exec(function(err) {
      if (err) return next(err);
      // Passing search values, name & sortKey, for use in the EJS
      res.render('profile/index', {
        user: req.user,
        name: req.query.name,
        sortKey
      });
    });
  }

  module.exports={
      index: index,
  }