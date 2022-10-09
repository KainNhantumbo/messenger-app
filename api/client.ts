import axios from 'axios';

const BASE_URL = 'http://localhost:4800';

const fetchClient = axios.create({ baseURL: BASE_URL });

export default fetchClient;
