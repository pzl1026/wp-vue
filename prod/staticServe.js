const serve = require('koa-static');
const Koa = require('koa');
const app = new Koa();
const helper = require('../helper');
// const projectConfig = require(helper.resolve('.bagua'));
// const port = projectConfig.serverStaticPort;

// $ GET /
app.use(serve(helper.resolve('output/static')));

app.listen(8000);

console.info('listening on port 8000');