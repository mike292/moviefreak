var http = require('http');//Import http module

http.createServer(function(request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});//Header information
    response.end('Hello World Again! \n'); //Simple string data
}).listen(8080, '127.0.0.1'); //Port number, localhost number

console.log('Server running at http://127.0.0.1:8080');//Simple console message