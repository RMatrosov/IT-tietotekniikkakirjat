/*const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults({
  static: './build',
});


const PORT = process.env.PORT || 8000;

server.use(middlewares);
server.use(router);
server.use(jsonServer.rewriter({
  '/api/!*': '/$1',
}))
server.listen(PORT, () => {
  console.log('Server is running');
});*/

const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults({noCors: false});
const port = process.env.PORT || 3000;

server.use(middlewares);
server.use(cors());
server.use(router);

server.listen(port);