import axios from "axios"
import { ACCESS_TOKEN } from './constants';

const baseURL = process.env.REACT_APP_REACT_API_URL;
const api = axios.create({
    baseURL: baseURL
    // baseURL: import.meta.env.REACT_API_URL
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if(token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},
(error) => {
    return Promise.reject(error)
}
)

export default api;


