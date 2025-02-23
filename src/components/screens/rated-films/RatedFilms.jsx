import { useEffect, useState } from 'react';
import MovieService from '../../../services/films/films.service';
import { AlertBanner } from '../../ui/alert-banner/AlertBanner';
import { FilmCard } from '../../ui/film-card/FilmCard';
import { Preloader } from '../../ui/preloader/Preloader';
import styles from './RatedFilms.module.css';

export const RatedFilms = () => {
	const message = 'Nothing found!';
	const type = 'warning';

	const [userRated, setUserRated] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const requestFilmById = async id => {
			try {
				const response = await MovieService.getFilmById(id);
				return response;
			} catch (err) {
				console.error('Get data error:', err);
				setLoading(false);
			}
		};

		const currentStorage = JSON.parse(localStorage.getItem('rating'));

		if (currentStorage?.length) {
			const queryRatedPromises = currentStorage.map(item => {
				return requestFilmById(item.id);
			});

			Promise.all(queryRatedPromises)
				.then(results => {
					const queryRated = results;
					setUserRated(queryRated);
					setLoading(false);
				})
				.catch(err => {
					console.error('Error fetching all data:', err);
				});
		} else {
			setLoading(false);
		}
	}, []);

	return (
		<>
			{loading ? (
				<Preloader />
			) : (
				<ul className={styles.wrapper}>
					{userRated?.length ? (
						userRated.map(item => {
							return (
								<li key={item.id} className={styles.card}>
									<FilmCard item={item} />
								</li>
							);
						})
					) : (
						<AlertBanner message={message} type={type} />
					)}
				</ul>
			)}
		</>
	);
};
