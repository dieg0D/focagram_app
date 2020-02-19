import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export const url = 'https://focagram.herokuapp.com'; // MUDE AQUI!!!!!
export const cableURL = 'wss://focagram.herokuapp.com';

const api = axios.create({
  baseURL: url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  async config => {
    try {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        config.headers.Authorization = JSON.parse(user).token;
      }
      return config;
    } catch (e) {
      console.log(e);
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default api;
