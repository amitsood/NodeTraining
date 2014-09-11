//Add a var to make this local variable 
prefix="Relaying: ";
module.exports=function(message)
{
	console.log(prefix + message);
}