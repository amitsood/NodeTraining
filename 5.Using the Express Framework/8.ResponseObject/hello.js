var events = require("events");

myObject= new events.Emitter();
myObject.on("MyCustomEvent", function(data){
	console.log(data);
});

myObject("MyCustomEvent", "Hello Node");