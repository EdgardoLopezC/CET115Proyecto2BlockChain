const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000

http.createServer((req,res)=>{
  if(req.url == '/') {
      const readStream = fs.createReadStream('./client/index.html');
      res.writeHead(200,{'Content-type': 'text/html'});
      readStream.pipe(res);
  }

  if (req.url == '/ui.js') {
      const readStream = fs.createReadStream('./client/ui.js');
      res.writeHead(200,{'Content-type': 'text/html'});
      readStream.pipe(res);
  }

  if (req.url == '/app.js') {
    const readStream = fs.createReadStream('./client/app.js');
    res.writeHead(200,{'Content-type': 'text/html'});
    readStream.pipe(res);
  
  if (req.url == '/contrac.js') {
    const readStream = fs.createReadStream('./node_modules/@truffle/contract/dist/truffle-contract.min.js');
    res.writeHead(200,{'Content-type': 'text/html'});
    readStream.pipe(res);
}

}).listen(port);

