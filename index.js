// import chalk from "chalk";
// const colors = require("colors");

// const app = require('./app');
// console.log(app.x + app.y + app.z());

const arr = [1, 2, 3, 4, 5, 6, 7, 5, 6, 7, 2];

// arr.filter((item) => {
//     console.log(item);
// })

let result = arr.filter((item) => {
    return item > 5;
})

console.log("---Result---");
console.log(result);

// console.log(colors.green("Harsh"));
// console.log(chalk.cyan("Sangani"));