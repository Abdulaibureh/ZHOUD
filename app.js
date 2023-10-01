http = require('http')
http.createServer( function (req, res){
  res.writeHead(200, {'contentType' : 'text/plain'});
  res.end('This is my career and one of my sustainable fields');
}).listen(8081);
console.log('server running at http://127.0.0.1:8081');



