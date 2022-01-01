import config from '../config.js';
import * as movieContentConnector from './connectors/movieContentConnector.js';
import * as trailerContentConnector from './connectors/trailerContentConnector.js';

async function mapTrailersToResource(resourceLink, trailerContent) {
  return {
    resource: resourceLink,
    trailers: trailerContent,
  };
}

async function handler(request, response) {
  const resourceLink = `${config.movie.url}/${request.params.movieId}`;
  const movieContent = await movieContentConnector.getMovieIdFromResource(resourceLink);
  const trailerContent = await trailerContentConnector.getTrailerUrlsFromMovieId(movieContent);

  return mapTrailersToResource(resourceLink, trailerContent);
}

async function routes(fastify, options) {
  fastify.get('/trailers/:movieId', handler);
}

export default routes;
