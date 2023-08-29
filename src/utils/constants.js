const MAIN_API_URL = process.env.NODE_ENV === 'production'
  ? 'https://api.mrspolischuk.nomoreparties.co'
  : 'http://localhost:3000';

export const mainApiConfig = {
  baseUrl: MAIN_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  credentials: 'include',
};

const MOVIES_API_URL = 'https://api.nomoreparties.co';

export const moviesApiConfig = {
  baseUrl: MOVIES_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};
