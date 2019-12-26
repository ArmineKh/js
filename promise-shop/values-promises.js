function attachTitle(firstargument){
return 'DR. '+firstargument;
}
var promise = new Promise(function (fulfill, reject) {
    fulfill('MANHATTAN');
  }).then(attachTitle).then(console.log)
