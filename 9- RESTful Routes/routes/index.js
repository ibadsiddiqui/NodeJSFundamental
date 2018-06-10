var express = require('express');
var router = express.Router();
var flight = require('../flights')
var flights = require('../data')

// flight objects
for (var number in flights){
  flight[number] = flight(flights[number])
}
/* GET home page. */

router.get('/flights/:number', function(req, res, next) {

  var number = req.params('number');
  
  if(typeof flights[number] === "undefined"){
    res.status(404).json({status: 'Error'});
  } else{
    res.json(flights[number])
  }

});
router.put('/flights/:number/arrived', function(req, res, next) {

  var number = req.params('number');
  
  if(typeof flights[number] === "undefined"){
    res.status(404).json({status: 'Error'});
  } else{
    // flights[number].triggerArrive();
    // res.json({status: "done"})
  }

});

module.exports = router;
