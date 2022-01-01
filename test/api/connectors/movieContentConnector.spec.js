import { describe, it } from "mocha";
import chai, {expect} from "chai";
import nock from 'nock';

import testConfig from '../../testConfig.js';
import {viaplayJson, viaplay404Json} from '../../fixtures/index.js';

import {getMovieContentFromResource, getMovieIdFromResource} from '../../../src/api/connectors/movieContentConnector.js';

describe('Get movie content from Viaplay', () => {
    const {url, path, invalidPath} = testConfig.viaplay;

    it('should return a valid JSON response with correct api invocation', async () => {
        // Simulate the valid request to viaplay
        nock(`${url}`).get(path).reply(200, viaplayJson);
    
        const response = await getMovieContentFromResource(`${url}${path}`);
    
        const movieId = response._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content.imdb.id
        expect(movieId).to.equal('tt2381941');
    });

    it('should return status 404 with error JSON when the resource id is invalid', async () => {
        // Simulate the invalid request to viaplay
        nock(`${url}`).get(invalidPath).reply(404, viaplay404Json);
    
        const err = await getMovieContentFromResource(`${url}${invalidPath}`);
    
        expect(err.success).to.equal(false);
        expect(err.payload.status).to.equal(404);
        expect(err.payload.message).to.equal('Request failed with status code 404')
      });
    
      it('should return movie id from the content with the correct resource link', async () => {
        // Simulate the valid request to viaplay
        nock(`${url}`).get(path).reply(200, viaplayJson);

        const movieId = await getMovieIdFromResource(`${url}${path}`);
    
        expect(movieId).to.equal('tt2381941');
      });

      describe('resolving movie id from Viaplay content', () => {
        it('should return undefined when "content" is not available', async () => {
            // Simulate the valid request to viaplay
            viaplayJson._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content = {}
            nock(`${url}`).get(path).reply(200, viaplayJson);

            const movieId = await getMovieIdFromResource(`${url}${path}`);
        
            expect(movieId).to.equal(undefined);
        });

        it('should return undefined when "viaplay:blocks" is empty', async () => {
            viaplayJson._embedded['viaplay:blocks'] = [];
            nock(`${url}`).get(path).reply(200, viaplayJson);

            const movieId = await getMovieIdFromResource(`${url}${path}`);

            expect(movieId).to.equal(undefined);
        });
      })
})