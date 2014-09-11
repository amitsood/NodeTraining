//https://github.com/visionmedia/supertest
var request = require('supertest')
request = request('http://localhost:3000');

request.get('/').expect(200).end(function(err, res){
	if(err){
		console.log("Error");
	}else
	{
		console.log('Passed');
	}
});

request.get('/').expect('Hello, Express!').end(function(err, res){
	if(err){
		console.log("Error");
	}else
	{
		console.log('Passed');
	}
})


request.post('/users').expect(200).expect('Creating a new user with the name :amit').send({'username': 'amit'}).end(function(err, res){
	if(err){
		console.log("Error");
	}else
	{
		console.log('Passed');
	}
})



// request(app)
//   .get('/user')
//   .expect('Content-Type', /json/)
//   .expect('Content-Length', '20')
//   .expect(200)
//   .end(function(err, res){
//     if (err) throw err;
//   });