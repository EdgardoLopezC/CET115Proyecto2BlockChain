var http = require('http');
var connect = require('connect');
var app = connect().use(connect.static(__dirname+'/client'));
http.createServer(app).listen(8080);