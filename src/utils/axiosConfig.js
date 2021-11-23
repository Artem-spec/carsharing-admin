import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api-factory.simbirsoft1.com/api/db',
    responseType: 'json',
});
instance.defaults.headers.common['X-Api-Factory-Application-Id'] =
    '5e25c641099b810b946c5d5b';

export default instance;
