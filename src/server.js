import serverBuilder from './app.js';

const server = serverBuilder({
  logger: true
})

server.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  }
});
