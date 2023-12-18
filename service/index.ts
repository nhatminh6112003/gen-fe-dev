import axios from 'axios';

export const BASE_URL = 'https://gen-dev.bytez.pro/api';

export const api = axios.create({
  baseURL: BASE_URL
});
