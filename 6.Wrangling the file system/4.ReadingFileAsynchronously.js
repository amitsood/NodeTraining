var fs= require('fs');
fs.readFile('target.txt', function(err,data){
	if(err)
	{	
		throw err;
	}
	//console.log(data.toString());
	
});

console.log('Hi i am not waiting for anyone to finish')