import fastify from "fastify";
import fastifyResponseCaching from 'fastify-response-caching';
import routes from "./api/routes.js";
import config from './config.js';

function build(options={}){
    const app = fastify(options)
    
    app.register(fastifyResponseCaching, {ttl: config.cacheTimeout});
    app.register(routes)

    return app
}

export default build;