const Koa = require('koa');
const app = new Koa();

const responseTime = async (ctx, next) => {
  const requestTime = new Date();
  await next();
  ctx.set('X-Response-Time', new Date() - requestTime);
};

const upperCase = async (ctx, next) => {
  await next();
  ctx.body = ctx.body.toUpperCase();
};

app.use(responseTime);
app.use(upperCase);
app.use(async (ctx) => {
  ctx.body = 'hello koa';
});

app.listen(process.argv[2]);



   // var koa = require('koa');

   //  var app = koa();

   //  app.use(responseTime());
   //  app.use(upperCase());

   //  app.use(function* () {
   //    // step 3: respond `hello koa`
   //    this.body = 'hello koa';
   //  });

   //  function responseTime() {
   //    return function* (next) {
   //      // step 1: record start time
   //      var start = new Date;
   //      yield next;
   //      // step 5: set X-Response-Time head
   //      this.set('X-Response-Time', new Date - start);
   //    };
   //  }

   //  function upperCase() {
   //    return function* (next) {
   //      // step 2: do nothing here
   //      yield next;
   //      // step 4: convert this.body to upper case
   //      this.body = this.body.toUpperCase();
   //    };
   //  }

   //  app.listen(process.argv[2]);