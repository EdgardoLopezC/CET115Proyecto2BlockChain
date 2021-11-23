var http = require('http');
var fs = require('fs');

var express = require('express'); 
var app = express();

const port = process.env.PORT || 3000

server.configure(function(){
  app.use('',express.static(__dirname + '/client'));  
});

server.listen(port);

http.createServer(function(req, res){
    fs.readFile('./client/index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(port);


