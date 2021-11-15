import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api-factory.simbirsoft1.com/api',
    responseType: 'json',
});
instance.defaults.headers.common['Authorization'] =
    'Basic MTFkN2M5Zjo0Y2JjZWE5NmRl';
instance.defaults.headers.common['X-Api-Factory-Application-Id'] =
    '5e25c641099b810b946c5d5b';

export default instance;
