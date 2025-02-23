import { axiosRequest } from '../../api/axios';
import { API_URL } from '../../config/api.config';
class FilmsService {
	async getSearchFilms(
		query,
		page = 1,
		adult = false,
		language = 'en-US'
	) {
		const response = await axiosRequest.get(
			`${API_URL}/search/movie?query=${query}&include_adult=${adult}&language=${language}&page=${page}`
		);

		return response.data;
	}

	async getFilmById(id) {
		const response = await axiosRequest.get(`${API_URL}/movie/${id}`);

		return response.data;
	}

	async getGenresFilms(language = 'en-US') {
		const response = await axiosRequest.get(
			`${API_URL}/genre/movie/list?language=${language}`
		);

		return response.data;
	}
}

export default new FilmsService();
