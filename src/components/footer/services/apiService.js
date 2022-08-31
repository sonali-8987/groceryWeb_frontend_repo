import axios from 'axios';

const promiseWithErrorHandling = (promise) => {
    return promise.catch(err => {
        if (err.response && err.response.status === 500) {
            window.location.assign("/error");
            console.log(err)

        } else {
            throw err;
        }
    });
};

const urls = "http://localhost:8080";

export default {
    get: async (path) => {
        return promiseWithErrorHandling(axios.get(`${urls}/${path}`));
    },
};