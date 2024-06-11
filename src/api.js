import axios from 'axios';

const http = axios.create({
    baseURL: 'https://localhost:7024',
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
});

export default http;


