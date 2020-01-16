var inputs = process.argv.slice(2);
var result = inputs.map((x) => x[0]).reduce((res, x) => res + x);
console.log(`[${inputs}] becomes "${result}"`);
