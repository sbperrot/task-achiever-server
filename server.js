require('dotenv').config();

const express = require('express');
const http = require('http');

const app = express();
const server = http.Server(app);
const routes = require('./routes')(app);

app.set('server', server);
app.set('root', __dirname);
app.set('env', process.env.NODE_ENV || 'development');


require('./configs/express.config')(app);

app.use('/api', routes);

process.on('uncaughtException', (err) => {
  console.error(err.stack);
  console.log('Node NOT Exiting...');
});

process.on('unhandledRejection', (err, promise) => {
  console.error('Unhandled promise rejection:', promise);
  console.error(err.stack);
  console.log('Node NOT Exiting...');
});

server.listen(
  process.env.NODE_PORT,
  () => {
    console.log(`Server listening on port ${ process.env.NODE_PORT }`);
  },
);

