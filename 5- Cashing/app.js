var flight = require('./flights');

flight.setOrigin('Karachi');
flight.setDestination('Maldives');
flight.setNumber(2);

console.log(flight.getInfo())

var anotherFlight = require('./flights')

console.log(flight.getInfo())
