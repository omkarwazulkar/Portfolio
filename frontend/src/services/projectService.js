import axios from 'axios';

const API_URL = 'http://13.60.6.247:5000/api/projects';

// Fetch all projects
export const getProjects = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    return [];
  }
};
