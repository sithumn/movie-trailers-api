import axios from 'axios';

import config from '../../config.js';
import handledPromise from '../helper.js';

/**
 * Do api call with IMDB movie id to get video content from TMDB
 * @param {string} movieId
 */
export async function getTrailerContentFromMovieId(movieId) {
  const { url, queryParams } = config.tmdb;

  return handledPromise(axios.get(`${url}/${movieId}`, { params: queryParams }));
}

/**
 * Get trailer video from TMDB content
 * @param {json} content
 */
export async function getTrailerContent(content) {
  const results = content?.payload?.message?.videos?.results;

  return results !== undefined ? results : [];
};

/**
 * Filter out trailer videos from video content
 * @param {Array} videoContentList
 */
export async function getTrailerUrlMappedContent(videoContentList) {
  if (videoContentList) {
    const isTrailer = videoContent => ('Teaser'.toLowerCase() === videoContent.type.toLowerCase() || 
      'Trailer'.toLowerCase() === videoContent.type.toLowerCase());
    const isFromYoutube = videoContent => 'YouTube'.toLowerCase() === videoContent.site.toLowerCase();
    const isTrailerFromYoutube = videoContent => isTrailer(videoContent) && isFromYoutube(videoContent);

    return videoContentList
      .filter(isTrailerFromYoutube)
      .map(videoContent => {
        delete videoContent.id;
        videoContent.url = `${config.trailer.youtubeBase}${videoContent.key}`;
        
        return videoContent;
      });
  }
  return [];
};

/**
 * Get trailer videos list from IMDB movie id
 * @param {string} movieId
 */
export async function getTrailerUrlsFromMovieId(movieId) {
  return getTrailerContentFromMovieId(movieId)
    .then(getTrailerContent)
    .then(getTrailerUrlMappedContent);
}
