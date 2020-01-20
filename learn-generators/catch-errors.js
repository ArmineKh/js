function *upper (items) {
  // ваш код здесь
  for (let v of items) {
    if (typeof v === "number") {
      yield null;

    } else {
      yield v.toUpperCase();
    }
  }
}

var bad_items = ['a', 'B', 1, 'c'];

for (var item of upper(bad_items)) {
  console.log(item);
}


/*
function *upper (items) {
     for (var item of items) {
       try {
         yield item.toUpperCase();
       } catch (e) {
         yield null;
       }
     }
   }

   var bad_items = ['a', 'B', 1, 'c'];

   for (var item of upper(bad_items)) {
     console.log(item);
   }
*/
