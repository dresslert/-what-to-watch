const axios = require('axios');

const TMDB_API_KEY = 'fb32b29ced34ca869f83ac6b890e3f91'

const tmdbClient = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

exports.getTMDBRecommendations = async (query) => {
  try {
    const response = await tmdbClient.get('/search/movie', {
      params: { query, api_key: TMDB_API_KEY }
    });
    console.log(response.data);
    return response.data.results.map(movie => ({
      title: movie.title,
      genre: movie.genre_ids.join(', '), // Convert genre IDs to a string
      description: movie.overview,
      rating: movie.vote_average
    }));
  } catch (error) {
    console.log('CHAVEEE',TMDB_API_KEY)
    throw new Error('Failed to fetch recommendations from TMDB');
  }
};
