//Everything is ina function and functions by default creates a new scope everytime they are called
module.exports= function(info)
{
	var values={
		number:info.number,
		origin:info.origin,
		destination: info.destination
	};
	var functions={
		getInfo:function()
		{
			return values;
		}	
	};

	return functions;
}