import config from '../config.js';
import * as movieContentConnector from './connectors/movieContentConnector.js';
import * as trailerContentConnector from './connectors/trailerContentConnector.js';

import { handleReply } from './helper.js';

async function mapTrailersToResource(resourceLink, trailerContent) {
  return {
    resource: resourceLink,
    trailers: trailerContent,
  };
}

const validateRequestParam = (movieId) => {
  if (movieId && movieId.length > 0) {
    return { success: true };
  }
  return { success: false, payload: { status: 400, message: 'movieId cannot be empty' } };
};

export async function requestHandler(resourceLink) {
  const content = await movieContentConnector.getMovieContentFromResource(resourceLink);

  if (content.success) {
    const movieId = await movieContentConnector.getMovieIdFromContent(content);

    let payload;
    if (movieId) {
      const trailerContent = await trailerContentConnector.getTrailerUrlsFromMovieId(movieId);

      payload = await mapTrailersToResource(resourceLink, trailerContent);
    } else {
      payload = await mapTrailersToResource(resourceLink, []);
    }

    return { success: true, payload };
  }

  if (content.payload.status === 404) {
    content.payload.message = 'Requested movie not found';
  }
  return content;
}

async function routes(fastify) {
  fastify.get('/:movieId/trailers', async (request, reply) => {
    const validationPayload = validateRequestParam(request.params.movieId);

    if (validationPayload.success) {
      const resourceLink = `${config.movie.url}/${request.params.movieId}`;
      const payload = await requestHandler(resourceLink);

      handleReply(reply, payload);
    }

    handleReply(reply, validationPayload);
  });
}

export default routes;
