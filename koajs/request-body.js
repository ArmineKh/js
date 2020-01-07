const Koa = require('koa');
const app = new Koa();
const parse = require('co-body');

app.use(async (ctx, next) => {
  if (ctx.method !== 'POST' || ctx.path !== '/') return next();
  const body = await parse(ctx);
  if (!body.name) ctx.throw(400, '.name required');
  ctx.body = body.name.toUpperCase();
});

app.listen(process.argv[2]);



 // var koa = require('koa');
 //    var parse = require('co-body');

 //    var app = koa();

 //    app.use(function* (next) {
 //      // only accept POST request
 //      if (this.method !== 'POST') return yield next;

 //      // max body size limit to `1kb`
 //      var body = yield parse(this, { limit: '1kb' });

 //      // if body.name not exist, respond `400`
 //      if (!body.name) this.throw(400, '.name required');

 //      this.body = body.name.toUpperCase();
 //    });

 //    app.listen(process.argv[2]);