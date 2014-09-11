var  express= require('express'),
	http=require('http');

var app= express();
app.configure(function(){
	app.set('port', 3000);
	app.use(express.bodyParser());
});


// accessing headers 
app.get('/', function(req,res){
	var userAgent= req.get('user-agent');
	
	//res.send(req.accepted);
	//res.send(req.acceptedCharsets);
	//res.send(req.acceptsCharset('utf-8'));// checks if a charater set is accepted or not
	res.send(req.acceptedLanguages);
	//res.send(req.acceptsLanguage('fr'));// check if we can reply back in french
	//res.end(userAgent);
	res.end()
});


http.createServer(app).listen(app.get('port'), function(){
console.log('Listening to port '+ app.get('port'));

});