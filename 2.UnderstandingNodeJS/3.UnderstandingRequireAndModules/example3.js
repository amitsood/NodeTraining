//Example to show how more then 1 function can be 
//exported and consumed

var say= require('./proclaim');
console.log(JSON.stringify(say));

say.softly('we have extra seats available.');
say.loudly('All flights are cancelled');