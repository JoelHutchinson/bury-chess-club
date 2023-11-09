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
