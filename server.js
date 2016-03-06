var express = require('express');
var app = express();

app.use(express.static(__dirname + '/client'));

app.get('/node',function(req,res) {
	console.log(req.toString());
	res.redirect('/');
});

app.listen(9999,function() {
	console.log("Listening on 9999 port for incoming request");
});