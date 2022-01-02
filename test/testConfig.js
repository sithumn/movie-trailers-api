export default {
    viaplay: {
      url: 'https://content.viaplay.se/pc-se/film',
      path: '/focus-2015',
      invalidPath: '/test'
    },
    tmdb: {
      invalidId: 'invalidId',
      movieId: 'tt2381941',
      url: 'https://api.themoviedb.org/3/movie',
      path: '/tt2381941?api_key=ef4fd5bf3f45892db28c103c5836395a&append_to_response=videos',
      invalidPath: '/invalidId?api_key=ef4fd5bf3f45892db28c103c5836395a&append_to_response=videos'
    }
  }