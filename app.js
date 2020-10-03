const { Console } = require('console');
//Node must be downloaded on their website
//Node has a libriary call 'http'
//Get the library and put it on a variable
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.end('Hello World! \n');
})
.listen(8080, '127.0.0.1');

console.log('Server running at http://127.0.0.1:8080/')