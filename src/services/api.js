//authentication in servidor[used axios]
import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://6249fa3efd7e30c51c0960f3.mockapi.io/api/v1/',
});

export const createSession = async (email, password) => {
    return api.post('/sessions', {email, password});
}