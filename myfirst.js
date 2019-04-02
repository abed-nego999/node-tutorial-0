const http = require('http');
const dt = require('./myfirstmodule');
const PORT = process.env.PORT || 5000

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(PORT);