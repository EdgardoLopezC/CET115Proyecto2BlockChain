var http = require('http');
var fs = require('fs');

const port = process.env.PORT || 3000

http.createServer(function(req, res){
    fs.readFile('./client/index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
    fs.readFile('./client/app.js',function (err, data){
      res.writeHead(200, {'Content-Type': 'text/text/javascript','Content-Length':data.length});
      res.write(data);
      res.end();
  });
}).listen(port);

