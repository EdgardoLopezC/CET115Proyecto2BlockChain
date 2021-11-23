var http = require('http');
var fs = require('fs');

const port = process.env.PORT || 3000

http.createServer(function(req, res){
  if(req.url.indexOf('.html') != -1){
    fs.readFile('./client/index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
  }

  if(req.url.indexOf('.css') != -1){
    fs.readFile('./node_modules/bootstrap/dist/css/bootstrap.min.css',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/css','Content-Length':data.length});
        res.write(data);
        res.end();
    });
  }

  if(req.url.indexOf('.js') != -1){
    fs.readFile('./client/app.js',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/javascript','Content-Length':data.length});
        res.write(data);
        res.end();
    });

    fs.readFile('./client/ui.js',function (err, data){
      res.writeHead(200, {'Content-Type': 'text/javascript','Content-Length':data.length});
      res.write(data);
      res.end();
  });
  }
}).listen(port);


