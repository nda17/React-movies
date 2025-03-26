import { useContext, useEffect, useState } from 'react';
import { Offline, Online } from 'react-detect-offline';
import { SessionIdContext } from '../../../App';
import { useDebounce } from '../../../hooks/useDebounce';
import MovieService from '../../../services/films/films.service';
import { RatedFilms } from '../../screens/rated-films/RatedFilms';
import { SearchFilms } from '../../screens/search-films/SearchFilms';
import { AlertBanner } from '../../ui/alert-banner/AlertBanner';

import styles from './Main.module.css';

export const Main = ({ page, query }) => {
	const message = 'No network connection!';
	const description = 'Please, try again later or check your connection.';
	const type = 'error';
	const [loading, setLoading] = useState(true);
	const [contentPageSearchFilms, setContentPageSearchFilms] = useState(1);
	const [contentPageRatedFilms, setContentPageRatedFilms] = useState(1);
	const [searchFilms, setSearchFilms] = useState({});
	const [userRate, setUserRate] = useState({});
	const [ratedFilms, setRatedFilms] = useState([]);
	const debouncedQuery = useDebounce(query, 700);
	const { sessionId } = useContext(SessionIdContext);

	useEffect(() => {
		//Запрос списка оцененных фильмов
		const requestRatedFilms = async sessionId => {
			try {
				const response = await MovieService.getRatedFilms(
					sessionId,
					contentPageRatedFilms
				);
				setRatedFilms(response);
				setLoading(false);

				const userRate = response.results.reduce((acc, item) => {
					acc[item.id] = item.rating;
					return acc;
				}, {});

				setUserRate(userRate);
			} catch (err) {
				console.error('Get data error:', err);
				setLoading(false);
			}
		};

		if (sessionId) {
			requestRatedFilms(sessionId);
		} else {
			setLoading(false);
		}
	}, [sessionId, contentPageRatedFilms, page]);

	useEffect(() => {
		//Поисковой запрос фильмов
		const requestSearchFilms = async () => {
			setLoading(true);

			try {
				const response = await MovieService.getSearchFilms(
					debouncedQuery,
					contentPageSearchFilms
				);

				setSearchFilms(response);
				setLoading(false);
			} catch (err) {
				console.error('Get data error:', err);
				setLoading(false);
			}
		};

		requestSearchFilms();
	}, [contentPageSearchFilms, debouncedQuery]);

	return (
		<main className={styles.main}>
			<Online>
				{page === 1 && (
					<SearchFilms
						loading={loading}
						searchFilms={searchFilms}
						userRate={userRate}
						contentPageSearchFilms={contentPageSearchFilms}
						setContentPageSearchFilms={setContentPageSearchFilms}
					/>
				)}
				{page === 2 && (
					<RatedFilms
						loading={loading}
						ratedFilms={ratedFilms}
						userRate={userRate}
						contentPageRatedFilms={contentPageRatedFilms}
						setContentPageRatedFilms={setContentPageRatedFilms}
					/>
				)}
			</Online>
			<Offline>
				<AlertBanner
					message={message}
					description={description}
					type={type}
				/>
			</Offline>
		</main>
	);
};
