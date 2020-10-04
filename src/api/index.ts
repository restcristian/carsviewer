import axios from 'axios';
const { REACT_APP_API } = process.env;

export const config = {
    baseURL: REACT_APP_API,
    headers: {
        'Content-type': 'application/json',
    },
};

export default axios.create(config);
