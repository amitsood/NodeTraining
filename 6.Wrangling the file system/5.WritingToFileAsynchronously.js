var fs= require('fs');
fs.writeFile('target.txt', "find me in the target.txt file", function(err){
	if(err)
	{
		throw err;
	}
});