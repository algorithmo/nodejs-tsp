

const server =  require('./server');
const router = require('./app/router').router;

server.Start(router);
