var connect = require('connect'),
    serveStatic = require('serve-static');
var app = connect();
app.use(serveStatic("./client"));
app.listen(port);