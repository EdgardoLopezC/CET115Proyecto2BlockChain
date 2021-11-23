var http = require('http');
var fs = require('fs');

var express = require('express'); 
var app = express();

app.use('/client',express.static(__dirname + '/client'));
app.use('/build/contracts',express.static(__dirname + '/build/contracts'));
app.use('/contracts',express.static(__dirname + '/contracts'));

const port = process.env.PORT || 3000

http.createServer(function(req, res){
    fs.readFile('./client/index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(port);


