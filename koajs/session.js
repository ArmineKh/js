const Koa = require('koa');
const session = require('koa-session');

const app = new Koa();

app.keys = ['secret', 'keys'];

app.use(session(app));

app.use(async (ctx, next) => {
  const numViews = Number(ctx.session.numViews || 0) + 1;
  ctx.session.numViews = numViews;
  ctx.body = `${numViews} views`;
})

app.listen(process.argv[2]);




// var koa = require('koa');
//     var session = require('koa-session');

//     var app = koa();
//     app.keys = ['secret', 'keys'];

//     app.use(session(app));

//     app.use(function *(){
//       var n = ~~this.session.view + 1;
//       this.session.view = n;
//       this.body = n + ' views';
//     });

//     app.listen(process.argv[2]);