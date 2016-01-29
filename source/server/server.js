var address = '0.0.0.0';
var port = 80;

var express = require('express');
var app = express();

var path = require('path');
var sitepath = path.join(__dirname, '../', 'public');

app.use(express.static(sitepath))
app.listen(port, address, function(){
	console.log('Express server listening on ' + address +':'+ port + " with: " + sitepath)
});
