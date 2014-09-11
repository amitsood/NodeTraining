var flight= require('./Flight');
flight.setNumber('CP100');
flight.setOrigin('LHR');
flight.setDestination('London');

console.log(flight.getInfo());


 var anotherFlight= require('./Flight');
anotherFlight.setNumber('111');
anotherFlight.setOrigin('AAA');
anotherFlight.setDestination('Delhi');
 console.log(anotherFlight.getInfo());

 console.log(flight.getInfo());