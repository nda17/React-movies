import axios from 'axios';
import { TOKEN } from '../config/api.config';

const axiosGetOptions = {
	method: 'GET',
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${TOKEN} `
	}
};

export const axiosGetRequest = axios.create(axiosGetOptions);

const axiosPostOptions = {
	method: 'POST',
	headers: {
		Authorization: `Bearer ${TOKEN}`,
		'Content-Type': 'application/json;charset=utf-8'
	}
};

export const axiosPostRequest = axios.create(axiosPostOptions);
