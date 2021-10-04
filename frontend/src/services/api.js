import axios from 'axios';

const api = axios.create({
    baseURL: 'https://vast-coast-20781.herokuapp.com/'
})

export default api;