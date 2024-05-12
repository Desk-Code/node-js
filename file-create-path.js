const { log } = require('console');
const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname, 'files');

console.log(dirpath);

// for (index = 1; index <= 5; index++) {
//     fs.writeFileSync(`${dirpath}/hello${index}.txt`, 'this is a simple file....');
// }

fs.readdir(dirpath, (err, files) => {
    files.forEach((item) => {
        console.log(`file name is ${item}`);
    });
});