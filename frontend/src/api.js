import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000';

export const getCases = async () => {
    try {
        const response = await axios.get(`${API_URL}/cases`);
        return response.data;
    } catch (error) {
        console.error('Error fetching cases:', error);
        throw error;
    }
};

export const addCase = async (newCase) => {
    try {
        const response = await axios.post(`${API_URL}/cases`, newCase);
        return response.data;
    } catch (error) {
        console.error('Error adding case:', error);
        throw error;
    }
};
