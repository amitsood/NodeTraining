var fs= require('fs'),
	net= require('net');

	var server= net.createServer(function(connection){
		console.log('Subscriber connected')
		connection.write('Now watching  target.txt' + '\n');
		var watcher= fs.watchFile('target.txt', function(){
			connection.write('File target.txt changed @ '+ Date.now() + '\n');
		});
		connection.on('close', function(){
			console.log('Subscriber disconnected');	
		});
	});


	server.listen(5432, function(){
		console.log('Listening for subscribers');
	});


// How to run -- node 1.NetWatcher.js
// Go to 2nd terminal and d0
// telnet localhost 5432