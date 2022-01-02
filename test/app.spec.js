import { describe, it } from 'mocha';
import { expect } from 'chai';

import build from '../src/app.js';

// Did not continue as some issues arose
describe('Request to the endpoint', () => {
    xit('"/focus-2015/trailers" should return correct response with http 200', async (done) => {
        const app = build();

        const response = app.inject({
            method: 'GET',
            url: '/focus-2015/trailers'
        }).then(done, done)

        expect(response.statusCode).to.equal(200);
    })
});