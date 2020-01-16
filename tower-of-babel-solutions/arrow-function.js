    var inputs =  process.argv.slice(2);       /*["the", "arrow function"];*/

     var result = inputs.map((x)=>x[0]).reduce((result, x) => result + x);
     console.log(result);
