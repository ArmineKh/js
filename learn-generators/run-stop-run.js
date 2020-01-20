function *range(from, to) {
      // ваш код здесь
      while (from <= to) {
        yield from;
        from++;
      }
    }

    for (var r of range(5, 10)) {
        console.log( r );
    }


    /*
    function *range(from, to) {
     for(var i = from; i <= to; i++) {
       yield i;
     }
   }

   for (var r of range(5, 10)) {
       console.log( r );
   }
*/
