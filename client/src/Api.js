// client/src/api.js
import axios from 'axios';

export const initCSRF = () => axios.get('/sanctum/csrf-cookie');

export const loginUser = (credentials) => axios.post('/login', credentials);

export const registerUser = (data) => axios.post('/api/register', data);
