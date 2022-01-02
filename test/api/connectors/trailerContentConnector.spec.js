import { describe, it } from 'mocha';
import { expect } from 'chai';
import nock from 'nock';

import testConfig from '../../testConfig.js';
import { tmdbJson, tmdb404Json } from '../../fixtures/index.js';

import {
  getTrailerContent,
  getTrailerContentFromMovieId,
  getTrailerUrlMappedContent,
  getTrailerUrlsFromMovieId,
} from '../../../src/api/connectors/trailerContentConnector.js';

describe('Get content from TMDB', () => {
  const {
    url, path, invalidPath, movieId, invalidId,
  } = testConfig.tmdb;

  it('should return a valid JSON response with correct api invocation', async () => {
    // Simulate the TMDB request and response for test
    nock(`${url}`).get(path).reply(200, tmdbJson);

    const response = await getTrailerContentFromMovieId(movieId);

    expect(response.payload.message.videos.results[0].key).to.equal('6vY9UPiI4eQ');
  });

  it('should return status 404 with error JSON when the movie id is invalid', async () => {
    // Simulate the TMDB request and response for test
    nock(`${url}`).get(invalidPath).reply(404, tmdb404Json);

    const err = await getTrailerContentFromMovieId(invalidId);

    expect(err.success).to.equal(false);
    expect(err.payload.status).to.equal(404);
    expect(err.payload.message).to.equal('Request failed with status code 404');
  });

  it('should return valid list of video content when valid response is provided', async () => {
    nock(`${url}`).get(path).reply(200, tmdbJson);

    const trailerContent = await getTrailerContentFromMovieId(movieId);
    const videoContentList = await getTrailerContent(trailerContent);

    expect(videoContentList).to.have.length(3);
  });

  it('should return an empty list of video content when invalid response is provided', async () => {
    const videoContentList = await getTrailerContent(undefined);

    expect(videoContentList).to.have.length(0);
  });

  it('should return valid list of mapped video content with trailer url when valid response is provided', async () => {
    nock(`${url}`).get(path).reply(200, tmdbJson);

    const trailerContent = await getTrailerContentFromMovieId(movieId);
    const videoContentList = await getTrailerContent(trailerContent);
    const mappedContent = await getTrailerUrlMappedContent(videoContentList);

    expect(mappedContent).to.have.length(3);
    expect(mappedContent[0].url).to.be.equal('https://www.youtube.com/watch?v=6vY9UPiI4eQ');
  });

  it('should return an empty list of video content when invalid response is provided', async () => {
    const mappedContent = await getTrailerUrlMappedContent(undefined);

    expect(mappedContent).to.have.length(0);
  });

  it('should return valid list of content with trailer url when valid movie id is provided', async () => {
    // Simulate the TMDB request and response for test
    nock(`${url}`).get(path).reply(200, tmdbJson);
    const contentList = await getTrailerUrlsFromMovieId(movieId);

    expect(contentList).to.have.length(3);
  });
});
