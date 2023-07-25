import axios from 'axios';

export const BASE_URL = 'http://localhost:5200/api/v1';
export const SOCKET_URL = 'http://localhost:5200';

const fetchClient = axios.create({ baseURL: BASE_URL });
export default fetchClient;
