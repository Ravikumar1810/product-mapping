import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api/products',
});

export const getAllProducts = () => api.get('/');
export const createProduct = (data) => api.post('/manual', data);
export const autoMatchProduct = (data) => api.post('/auto', data);
