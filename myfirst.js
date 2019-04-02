const http = require('http');
const url = require('url');
const dt = require('./myfirstmodule');
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
  res.end(txt);
}).listen(PORT);