import { axiosGetRequest, axiosPostRequest } from '../../api/axios';
import { API_URL } from '../../config/api.config';
class FilmsService {
	async createGuestSession() {
		const response = await axiosGetRequest.get(
			`${API_URL}/authentication/guest_session/new`
		);

		return response.data;
	}

	async getSearchFilms(
		query,
		page = 1,
		adult = false,
		language = 'en-US'
	) {
		const response = await axiosGetRequest.get(
			`${API_URL}/search/movie?query=${query}&include_adult=${adult}&language=${language}&page=${page}`
		);

		return response.data;
	}

	async getGenresFilms(language = 'en-US') {
		const response = await axiosGetRequest.get(
			`${API_URL}/genre/movie/list?language=${language}`
		);

		return response.data;
	}

	async getRatedFilms(sessionId, page = 1, language = 'en-US') {
		const response = await axiosGetRequest.get(
			`${API_URL}/guest_session/${sessionId}/rated/movies?${language}&page=${page}&sort_by=created_at.asc`
		);
		return response.data;
	}

	async addRateFilm(movieId, rating, sessionId) {
		const response = await axiosPostRequest.post(
			`${API_URL}/movie/${movieId}/rating`,
			{
				value: `${rating}`
			},
			{
				params: {
					guest_session_id: `${sessionId}`
				}
			}
		);

		return response.data;
	}
}

export default new FilmsService();
