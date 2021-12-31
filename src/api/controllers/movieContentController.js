import axios from 'axios';
import handledPromise from './helper.js';

/**
 * Do API call to get movie content from viaplay
 *
 * @param {string} resourceLink - viaplay movie url
 */
export async function getMovieContentFromResource(resourceLink) {
    return handledPromise(axios.get(`${resourceLink}`));
};

/**
   * Get IMDB id from the movie content
   *
   * @param {json} content
   */
//TODO handle null content 
const getMovieIdFromContent = (content) => content._embedded['viaplay:blocks'][0]._embedded['viaplay:product'].content.imdb.id;

/**
   * Get IMDB id from viaplay resource link
   * @param {string} resourceLink
   */
export async function getMovieIdFromResource(resourceLink) {
    return getMovieContentFromResource(resourceLink)
        .then(getMovieIdFromContent);
}
