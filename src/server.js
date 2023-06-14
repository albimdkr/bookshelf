// eslint-disable-next-line import/no-extraneous-dependencies
const Hapi = require('@hapi/hapi');
// eslint-disable-next-line no-unused-vars
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });
  await server.start();
  console.log(`Server run on ${server.info.uri}`);
};

init();
