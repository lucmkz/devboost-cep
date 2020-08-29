import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.postmon.com.br',
})

export default api;