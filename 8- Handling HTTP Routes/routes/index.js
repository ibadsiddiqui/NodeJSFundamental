
/*
 * GET home page.
 */


var flight = require('./flights');

var flight1 = flight({
  number: 1,
  origin: "LAX",
  destination: "DCA",
  departs: "9AM",
  arrives: "4PM",
})

var flight2 = flight({
  number: 2,
  origin: "LAX",
  destination: "PDX",
  departs: "10AM",
  arrives: "12PM",
})

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};