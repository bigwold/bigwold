var http = require('http')
, fs = require('fs')
, ejs = require('ejs');

var server = http.createServer(function(req, res){
	var url = req.url;
	url = url.toString().substr(1);
	console.log(url);
	fs.exists(url, function(exist){
		if(exist){
			console.log("Existe: ");
		}else{
			console.log("NÃo Existe");
		}
	});
});







server.listen(3000);
