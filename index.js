const pkg = require('./package.json');
const server = require('./lib/server');

process.title = pkg.name;

const shutdown = async () => {
  console.log('Gracefully shutdown in progress');
  await server.stop();
  await database.close();
  process.exit(0);
};

process.on('SIGTERM', shutdown)
  .on('SIGINT', shutdown)
  .on('SIGHUP', shutdown)
  .on('uncaughtException', (err) => {
    console.log('uncaughtException caught the error: ', err);
    throw err;
  })
  .on('unhandledRejection', (err, promise) => {
    console.log(`Unhandled Rejection at: Promise ${promise} reason: ${err}`);
    throw err;
  })
  .on('exit', (code) => {
    console.log(`Node process exit with code: ${code}`);
  });

(async () => {
  try {
    await server.start();
  } catch (err) {
    console.log('[APP] initialization failed', err);
    throw err;
  }
  console.log('[APP] initialized SUCCESSFULLY');
})();
