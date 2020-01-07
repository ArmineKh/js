const Koa = require('koa');
const app = new Koa();

app.keys = ['secret', 'keys'];
app.use(async (ctx, next) => {
  const numViews = Number(ctx.cookies.get('view', { signed: true }) || 0) + 1;
  ctx.cookies.set('view', numViews, { signed: true });
  ctx.body = `${numViews} views`;
})

app.listen(process.argv[2]);





 // var koa = require('koa');

 //    var app = koa();

 //    // to use signed cookie, we need to set app.keys
 //    app.keys = ['secret', 'keys'];

 //    app.use(function *(){
 //      var n = ~~this.cookies.get('view', { signed: true }) + 1;
 //      this.cookies.set('view', n, { signed: true });
 //      this.body = n + ' views';
 //    });

 //    app.listen(process.argv[2]);
