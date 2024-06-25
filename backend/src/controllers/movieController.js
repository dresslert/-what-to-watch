const { getTMDBRecommendations } = require('../services/tmdbService');

exports.getRecommendations = async (req, res) => {
  try {
    const query = req.query.query || 'Batman'; // Default to 'Batman' if no query is provided
    const tmdbRecommendations = await getTMDBRecommendations(query);
    res.json(tmdbRecommendations);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar recomendações' });
  }
};
