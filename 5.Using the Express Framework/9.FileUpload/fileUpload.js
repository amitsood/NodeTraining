var express = require('express'), app = express(), fs = require('fs');
app.listen(8000);

app.get('/', function(req, res) {
	res.send('<form action="/upload" enctype="multipart/form-data" method="post">' + '<input type="text" name="title"><br>' + '<input type="file" name="upload"><br>' + '<input type="submit" value="Upload">' + '</form>');
});
app.post('/upload', express.bodyParser(), function(req, res) {
	console.log(req.files.upload.name);
	var path = req.files.upload.name;
	if (req.files.upload.name.indexOf('.pdf') !== -1) {
		path = "./Files/pdf/" + path;
	} else if (req.files.upload.name.indexOf('.jpg') !== -1) {
		path = "./Files/image/" + path;
	}
	if (req.files.upload.name.indexOf('.txt') !== -1) {
		path = "./Files/doc/" + path;
	}
	console.log(path);
	fs.rename(req.files.upload.path, path, function(err) {
		if (!err)
			res.send('uploaded!');
	});

});
