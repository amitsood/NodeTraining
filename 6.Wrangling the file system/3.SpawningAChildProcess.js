// In this example we will enhance our file watching example even further
//by having it spawn a child process in response to a change

var fs= require('fs'),
	filename=process.argv[2],
	spawn= require('child_process').spawn;

if(!filename)
{
	throw Error('A file to watch must be specified!');
}

fs.watchFile(filename,function(){
// The first parameter of spawn() is the name of the program we wish to execute
	// in our case its ls.
	// The second parameter is an array of commands-line arguments. It contains the flags and the target file name.
	// The object returned by spawn() is a ChildProcess.
	// ls is list attributes of a file
	var ls= spawn('ls',['-lh', filename	]);

	//Child Process has properties like stdin, stdout and stderr which are streams that can be used to read or write data.
	//here we are sending output from child process to our standard output stream using the pipe() method. 
	ls.stdout.pipe(process.stdout);
});
console.log('Now watching '+ filename + " for changes");

// Run Command -- node 3.SpawningAChildProcess.js target.txt

//Expected output should have username, group and other aspects of the file
