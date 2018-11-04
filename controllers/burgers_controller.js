var express = require('express');

var router = express.Router();
// Import the model (burger.js) to use its database functions.
var burger = require('../models/burger.js');

// Create the routes and associated logic
router.get('/', function (req, res) {
  burger.selectAll(function (data) {
    var hbsObject = {
      burgers: data
    };
    // console.log(hbsObject);
    res.render('index', hbsObject);
  });
});

router.post("/burgers/add", function (req, res) {
  burger.insertOne(req.body.burger_name, function (result) {
    // Send back the ID of the new quote
    console.log(result);
    res.redirect("/");
  });
});

router.put("/burgers/:id", function (req, res) {
  burger.update(req.params.id, function (result) {
    console.log(result);
    res.sendStatus(200);
  });
});
module.exports = router;  