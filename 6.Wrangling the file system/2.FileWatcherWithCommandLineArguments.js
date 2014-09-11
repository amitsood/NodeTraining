//Example takes target filename to watch from command line arguments

var  fs= require('fs'),
	filename= process.argv[2];

if(!filename)
{
	throw Error('A file to watch must be specified!');
}	

fs.watchFile(filename, function(){
	console.log('File #'+ filename + " just got updated.");
});

console.log('Now watching '+ filename + " for changes");


//to run --node 2.FileWatcherWithCommandLineArguments.js target.txt