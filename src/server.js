import Fastify from 'fastify';
import fastifyResponseCaching from 'fastify-response-caching';
import apiRoutes from './api/routes.js';
import config from './config.js';

// Configure fastify
const fastify = Fastify({
  logger: true,
});
// Register caching for responses
fastify.register(fastifyResponseCaching, {ttl: config.cacheTimeout});

// Register API routes
fastify.register(apiRoutes)

fastify.listen(3000, '0.0.0.0', (err) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
});
