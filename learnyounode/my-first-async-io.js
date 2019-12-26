const fs = require ('fs')
let file = process.argv[2];
let buf = fs.readFile(file, function finishedReading(error, file){
  if (error) return console.error(error)
  const lines = file.toString().split('\n').length - 1
    console.log(lines)
});



    // const fs = require('fs')
    //    const file = process.argv[2]
    //
    //    fs.readFile(file, function (err, contents) {
    //      if (err) {
    //        return console.log(err)
    //      }
    //      // fs.readFile(file, 'utf8', callback) can also be used
    //      const lines = contents.toString().split('\n').length - 1
    //      console.log(lines)
    //    })
