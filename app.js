const http = require('http');
const fs = require('fs');

const port = process.env.PORT || 3000

const server = http.createServer((req,res)=>{
  if(req.url == '/') {
      const readStream = fs.createReadStream('./client/index.html');
      res.writeHead(200,{'Content-type': 'text/html'});
      readStream.pipe(res);
  }

});

