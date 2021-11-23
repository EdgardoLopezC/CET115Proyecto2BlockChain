var http = require('http');
var fs = require('fs');

const port = process.env.PORT || 3000

http.createServer(function(req, res){
    fs.readFile('./client/index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(port);


var connect = require('connect'),
    serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("./client"));
app.listen(port);

