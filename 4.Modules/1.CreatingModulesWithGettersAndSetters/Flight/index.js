//These 3 variables will be cached because they are not in a function scope.
var number, origin, destination;
exports.setNumber= function(num)
{
	number= num;
};
exports.setOrigin= function(ori)
{
	origin= ori;
};
exports.setDestination= function(des)
{
	destination= des;
};
exports.getInfo= function()
{
	return {
		number:number,
		origin:origin,
		destination: destination
	};
}

