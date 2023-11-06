import axios from 'axios';

export const SELF_API = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});

export const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
  headers: {
    'Content-type': 'application/json',
    Accept: 'application/json',
  },
});
