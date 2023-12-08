import axios from 'axios';

// Base URL for WordPress REST API.
const API_BASE_URL = 'https://wp.burychessclub.org.uk/wp-json/wp/v2/';

// Fetch data from the API.
export async function fetchData(endpoint, params = {}) {
  try {
    const response = await axios.get(`${API_BASE_URL}${endpoint}`, {
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Update popularity for a game by sending a PATCH request.
export async function updatePopularity(gameId, updatedPopularity) {
  try {
    console.log(`${API_BASE_URL}games/${gameId}`);
    const response = await axios.patch(`${API_BASE_URL}games/${gameId}`, {
      popularity: updatedPopularity,
    });
    return response.data;
  } catch (error) {
    console.error('Error updating popularity:', error);
    throw error;
  }
}
