import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

export const getCases = async () => {
    try {
        const response = await axios.get(`${API_URL}/cases`);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 200 range
            console.error('Error response:', error.response.data);
            console.error('Error status:', error.response.status);
            console.error('Error headers:', error.response.headers);
        } else if (error.request) {
            // Request was made but no response was received
            console.error('Error request:', error.request);
        } else {
            // Something else happened while setting up the request
            console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
        throw error;
    }
};

export const addCase = async (newCase) => {
    try {
        const response = await axios.post(`${API_URL}/cases`, newCase);
        return response.data;
    } catch (error) {
        if (error.response) {
            // Server responded with a status other than 200 range
            console.error('Error response:', error.response.data);
            console.error('Error status:', error.response.status);
            console.error('Error headers:', error.response.headers);
        } else if (error.request) {
            // Request was made but no response was received
            console.error('Error request:', error.request);
        } else {
            // Something else happened while setting up the request
            console.error('Error message:', error.message);
        }
        console.error('Error config:', error.config);
        throw error;
    }
};
