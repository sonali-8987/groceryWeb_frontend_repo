import axios from 'axios';

const urls = "http://localhost:8080";

export default {
    get: async (path) => {
        return axios.get(`${urls}/${path}`);
    },
};