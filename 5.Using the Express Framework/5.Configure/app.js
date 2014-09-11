var express=require('express'),
	http=require('http');


var app = express();

//global configuration used for dev and prod
app.configure(function(){
	//default settings
	app.get('port', 3000);
	app.set('views', __dirname+'/views');
	app.set('view engine', 'jade');
	app.set('view cache', true); // Most useful in prod env. 
	app.enable('view cache'); // same as above
	
	//Custom settings
	app.set('local', true);

	app.use(express.bodyParser());
});


app.configure('dev', function(){
	//Development configuration
	app.set('view cache', false); // Most useful in prod env. 
});

app.configure('prod', function(){
	app.set('view cache', true); // Most useful in prod env. 
	//Production configuration
})

app.get('/', function(req,res){
	res.render('home.jade');
});

http.createServer(app).listen(app.get('port'), function(){
	console.log('listening to port ' + app.get('port'))l
});
