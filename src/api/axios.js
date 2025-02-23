import axios from 'axios';
import { TOKEN } from '../config/api.config';

const axiosOptions = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${TOKEN} `
	}
};

export const axiosRequest = axios.create(axiosOptions);
