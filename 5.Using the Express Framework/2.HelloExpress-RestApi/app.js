var express = require('express')
  , http = require('http');

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.use(express.bodyParser());
});


http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});


app.get('/', function(req, res){
  res.send("Hello, Express!");
  res.end();
});


app.get('/hi', function(req,res){
 var message=[
    "<h1>Hello Express</h1>",
    "<p>Welcome to building web apps in Node.js with Express</p>",
    "<ui><li>Red</li><li>Green</li><li>Blue</li><li>Black</li></ui>"
    ].join('\n');
    res.send(message);
});


// app.get('/users/:userid', function(req,res){
//   res.send("<h1> Hello, User # "+ req.params.userid);
// })


//default values to quesry string parameters
app.get('/names/:name?', function(req,res){
  //res.send(req.params.name); // what if i want to default value of name to something if its not passed
  res.send(req.param('name', 'Amit'));
});


app.post('/users', function(req,res){
  console.log("*******   "+req.body.username);
  res.send('Creating a new user with the name :' + req.body.username );
});


//app.put
//app.delete


app.get(/\/users\/(\d*)\/?(edit)?/, function(req, res){
    //users/10
    //users/10/
    //users/10/edit

    var message="user #" + req.params[0];
    if(req.params[1]=== "edit")
    { 
        message= "Editing " + message;
    }else
    {
        message= "Viewing "+ message;
    }
    res.send(message);

});


