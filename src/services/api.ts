// services/api.ts
import axios from 'axios';

// Ganti IP ini dengan IP lokal komputer kamu
const baseURL = 'http://192.168.1.26:8000/api';

export const api = axios.create({
  baseURL,
});
