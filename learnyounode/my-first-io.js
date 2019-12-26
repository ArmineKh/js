 const fs = require ('fs')
let file = process.argv[2];
let buf = fs.readFileSync(file);
let str = buf.toString();
let arr = str.split('\n');
console.log(arr.length -1);

// 
// const fs = require('fs')
//
//     const contents = fs.readFileSync(process.argv[2])
//     const lines = contents.toString().split('\n').length - 1
//     console.log(lines)
