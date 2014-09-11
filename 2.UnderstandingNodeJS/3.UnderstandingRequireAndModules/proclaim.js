var say= function(message)
{
	console.log('proclaiming: '+ message);
}

//Notice we have not used "module.exports"
exports.softly= say;
exports.loudly= function(message)
{
	console.log("proclaiming: "+ message);
}