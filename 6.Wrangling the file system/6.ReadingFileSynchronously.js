var fs= require('fs');
var data=fs.readFileSync('target.txt');

console.log(data.toString());	


console.log('I had to wait for file to be read');