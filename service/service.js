var Koa = require('koa'),
    router = require('koa-router')(),
    render = require('koa-art-template'),
    bodyParser = require('koa-bodyparser'),
    cors = require('koa2-cors'),
    path = require('path'),
    static = require('koa-static'),
    DB = require('./module/db.js');

var app = new Koa();

//配置post提交数据的中间件
app.use(bodyParser());

/**
 * 配置跨域
 */
/*app.use(cors({
    origin: function (ctx) {
        if (ctx.url === '/api') {
            return '*'; // 允许来自所有域名请求
        }
        return 'http://localhost:5000'; // 这样就能只允许 http://localhost:5000 这个域名的请求了
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowHeaders: ['Content-Type', 'application/json;charset=utf-8'],
}))
*/
app.use(cors({
  origin: function(ctx) {
    return '*';
  },
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'PUT', 'POST', 'DELETE'],
  allowHeaders: ['Content-Type', 'application/json;charset=utf-8'],
}));

render(app, {
  root: path.join(__dirname, 'views'),
  extname: '.html',
  debug: process.env.NODE_ENV !== 'production',
  dateFormat:dateFormat=function(value){
      return sd.format(value, 'YYYY-MM-DD HH:mm');
  } /*扩展模板里面的方法*/
});

app.use(static(__dirname + '/public'));


var api=require('./routes/api.js');
var index=require('./routes/index.js');
router.use('/console/userFilter',api);
router.use(index);
app.use(router.routes()); /*启动路由*/
app.listen(5000);


