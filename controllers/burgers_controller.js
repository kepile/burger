var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  console.log("line 10 burger controller");
  burger.all(function(data) {
    var burgerObject = {
      burgers: data
    };
    console.log(burgerObject);
    res.render("index", burgerObject);
  });
});

router.post("/", function(req, res) {
  console.log("post ************ " + JSON.stringify(req.body));

  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.burger_name, false
  ], function() {
    res.redirect("/");
  });
});

router.put("/all", function(req, res) {

  burger.updateall({
    devoured: req.body.devoured
  },  function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    var timer = setInterval(function(){ 
      clearInterval(timer);
      res.redirect("/"); 
    }, 1000);
    // res.redirect("/");
  });
});


// Export routes for server.js to use.
module.exports = router;