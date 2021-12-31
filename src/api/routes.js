import config from '../config.js';
import * as MovieContentController from './controllers/movieContentController.js';
import * as TMDBContentController from './controllers/trailerContentController.js';

async function routes(fastify, options) {
  fastify.get('/trailers/:movieId', handler);
}

async function handler(request, response) {
  const resourceLink = `${config.movie.url}/${request.params.movieId}`
  const movieContent = await MovieContentController.getMovieIdFromResource(resourceLink)
  const trailerContent = await TMDBContentController.getTrailerUrlsFromMovieId(movieContent)
  
  return await mapTrailersToResource(resourceLink, trailerContent);
}

async function mapTrailersToResource(resourceLink, trailerContent) {
  return {
    resource: resourceLink,
    trailers: trailerContent
  };
};

export default routes;
