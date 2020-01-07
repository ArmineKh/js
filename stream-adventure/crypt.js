var crypto = require('crypto');

var args = process.argv.slice(2);
var passphrase = args[0];

var decrypt = crypto.createDecipher("aes256",passphrase);
process.stdin.pipe(decrypt).pipe(process.stdout);




 // var crypto = require('crypto');
 //  process.stdin
 //      .pipe(crypto.createDecipher('aes256', process.argv[2]))
 //      .pipe(process.stdout)
 //  ;