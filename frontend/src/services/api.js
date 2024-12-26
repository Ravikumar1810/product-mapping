import axios from 'axios';

const api = axios.create({
  baseURL: 'https://product-mapping-backend.onrender.com/api/products',
});

export const getAllProducts = () => api.get('/');
export const createProduct = (data) => api.post('/manual', data);
export const autoMatchProduct = (data) => api.post('/auto', data);
