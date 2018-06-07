var express = require('express');
var router = express.Router();
var flight = require('../flights')


// flight objects
var flight1 = flight({
  number: 1,
  origin: 'LAX',
  destination: 'DCA',
  departs: '9AM',
  arrives: '4PM',
  
})

var flight2 = flight({
  number: 2,
  origin: 'LAX',
  destination: 'PDX',
  departs: '10AM',
  arrives: '2PM',
  
})

/* GET home page. */
router.get('/flights', function(req, res, next) {
  res.json(flight1.getInformation());
});

module.exports = router;
