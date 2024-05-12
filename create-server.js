const http = require('http');
const data = require('./data');

// const data = (req, res) => {
//     res.write("<h1>Hello, My Name is Harsh Sangani...</h1>");
//     res.end(); 
// }

http.createServer((req, res) => {
    // res.write("<h1>Hello, My Name is Harsh Sangani...</h1>");
    res.writeHead(200, { 'Content-Type': 'Application\json' });
    res.write(JSON.stringify(data));
    res.end();
}).listen(4500);