var app = require('express')();

var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.sendFile(__dirname + 'client/index.html');
});
app.listen(port, function() {
  console.log("Node app is running at localhost:" + app.get('port'))
});


/*var http = require('http');
var fs = require('fs');

const port = process.env.PORT || 3000

http.createServer(function(req, res){
    fs.readFile('./client/index.html',function (err, data){
        res.writeHead(200, {'Content-Type': 'text/html','Content-Length':data.length});
        res.write(data);
        res.end();
    });
}).listen(port);*/


