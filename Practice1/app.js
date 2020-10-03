//Node must be downloaded on their website
//Node has a libriary call 'http'
//Get the library and put it on a variable
var http = require('http');
var fs = require('fs');

// var txtNotepad = fs.readFile('example.txt', function (err, data) {
//     if (err) {
//         //adding return ends the function
//         return console.error(err);
//     }
//     // 
//     console.log("In function: \n" + data.toString());
//     return data.toString();
// })
// console.log("Test " + txtNotepad);
var txtMessage = "Test reading text from notepad \n";
var txtNotepad = fs.readFileSync('example.txt');
console.log(txtMessage + txtNotepad);

http.createServer(function (request, response) {
    //200 - status code // {'Content-type': 'text/plain'} - header or information required to run
    response.writeHead(200, {'Content-type': 'text/plain'});
    response.end(txtMessage + txtNotepad);

})
.listen(8080, '127.0.0.1');
//Simple log message
console.log('Server running at http://127.0.0.1:8080/')




// var buf = new Buffer("Test", "utf-8");
// console.log(buf.toString());
// buf = new Buffer(26);
// buf[0] = 5+97;
// console.log("What is buf: "+  buf.toString());

//Absolute path of this file
// console.log(__filename);
//Absolute path of this directory/folder
// console.log(__dirname);

// function printHello() {
//     console.log( "Hello, World!");
//  }
 
 // Now call above function after 2 seconds
//  var t = setTimeout(printHello, 2000);
// clearTimeout(t); //stops the the selected setTimeout
// setInterval(printHello,2000); //executes the function every 2 secs

