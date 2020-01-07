const Koa = require('koa');
const app = new Koa();

const errorHandler = async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = 500;
    ctx.body = 'internal server error';
  }
};

app.use(errorHandler);

app.use(async (ctx, next) => {
  if (ctx.path === '/error') throw new Error('oops');
  ctx.body = 'OK';
});

app.listen(process.argv[2]);





// var koa = require('koa');

//     var app = koa();

//     app.use(errorHandler());

//     app.use(function* () {
//       if (this.path === '/error') throw new Error('ooops');
//       this.body = 'OK';
//     });

//     function errorHandler() {
//       return function* (next) {
//         // we catch all downstream errors here
//         try {
//           yield next;
//         } catch (err) {
//           // set response status
//           this.status = 500;
//           // set response body
//           this.body = 'internal server error';
//           // can emit on app for log
//           // this.app.emit('error', err, this);
//         }
//       };
//     }

//     app.listen(process.argv[2]);