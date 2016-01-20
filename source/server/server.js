// global.app_require = function(name) {
// 	console.log(__dirname + '/' + name);
//     return require(__dirname + '/' + name);
// }

// var address = '134.249.141.104';

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


// var connect = require('connect');
// var serveStatic = require('serve-static');


// connect().use(connect.static(__dirname)).listen(port, function(){
// 		console.log('Express server listening on ' + address +':'+ port);	
// 	});	
// connect().use(serveStatic(__dirname)).listen(port, address, function(){
// 		console.log('Express server listening on ' + address +':'+ port);	
// 	});	

// var express = require('express');
// var app = express();

// app.listen(3000, function() {
//   console.log('Server listening on port 3000');
// });


// var server = http.createServer( app ).listen( PORT, function() {
//     console.log('Express server listening on port ' + PORT);
// } );
