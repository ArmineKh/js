const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
  if (ctx.path !== '/') return next();
  ctx.body = 'hello koa';
})

app.use(async (ctx, next) => {
  if (ctx.path !== '/404') return next();
  ctx.body = 'page not found';
})

app.use(async (ctx, next) => {
  if (ctx.path !== '/500') return next();
  ctx.body = 'internal server error';
})

app.listen(process.argv[2]);



 // var koa = require('koa');

 //    var app = koa();

 //    app.use(function* (next) {
 //      if (this.path !== '/') {
 //        return yield next;
 //      }

 //      this.body = 'hello koa';
 //    });

 //    app.use(function* (next) {
 //      if (this.path !== '/404') {
 //        return yield next;
 //      }

 //      this.body = 'page not found';
 //    });

 //    app.use(function* (next) {
 //      if (this.path !== '/500') {
 //        return yield next;
 //      }

 //      this.body = 'internal server error';
 //    });

 //    app.listen(process.argv[2]);
