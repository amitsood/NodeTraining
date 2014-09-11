var five = require("johnny-five")
  , express = require("express")
  , app = express()
  , board, servo, led, motion
  , serie = "/dev/tty.usbmodemfa131"
  , port = 3000;

app.set('views', __dirname + '/tpl');


var io = require('socket.io').listen(app.listen(port));
console.log("Listening on port " + port);

board = new five.Board({ port: serie });
board.on("ready", function() {
  console.log('ready');
    motion = new five.IR.Motion(8);
    this.repl.inject({
      motion: motion
      });
    
  motion.on("calibrated", function(err, ts) {
    console.log("calibrated", ts);
  });

led=new five.Led(13);
  motion.on("motionstart", function(err, ts) {
    console.log("motionstart", ts);
    led.on();
    
  });


  console.log('board is ready to fire');

});