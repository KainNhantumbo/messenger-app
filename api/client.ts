import axios from 'axios';

const BASE_URL = 'http://localhost:5200/api/v1';

const fetchClient = axios.create({ baseURL: BASE_URL });

export default fetchClient;
