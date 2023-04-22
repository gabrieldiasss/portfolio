import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.STRAPI_API_PUBLIC,
  headers: { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` },
});
