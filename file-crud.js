const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, 'files');
const filepath = `${dirpath}/apple.txt`;

//craete file
// fs.writeFileSync(filepath, 'This is a simple file....');

//read file content
// fs.readFile(filepath, 'utf8', (err, files) => {
//     console.log(files);
// });

//add file content
// fs.appendFile(filepath, `This file name is a ${__filename}`, (err) => {
//     if (!err) {
//         console.log("Data is updated....");
//     }
// });

//rename file name
// fs.rename(filepath, `${dirpath}/fruit.txt`, (err) => {
//     if (!err) {
//         console.log("File name is changed....");
//     }
// });

//delete file
// fs.unlinkSync(`${dirpath}/fruit.txt`);