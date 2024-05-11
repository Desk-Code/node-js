const http = require('http');

// const data = (req, res) => {
//     res.write("<h1>Hello, My Name is Harsh Sangani...</h1>");
//     res.end(); 
// }

http.createServer((req, res) => {
    res.write("<h1>Hello, My Name is Harsh Sangani...</h1>");
    res.end();
}).listen(4500);