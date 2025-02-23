import { useEffect, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import MovieService from '../../../services/movies/movies.service';
import { AlertBanner } from '../../ui/alert-banner/AlertBanner';
import { FilmCard } from '../../ui/film-card/FilmCard';
import { PaginationPages } from '../../ui/pagination-pages/PaginationPages';
import { Preloader } from '../../ui/preloader/Preloader';
import styles from './SearchFilms.module.css';

export const SearchFilms = props => {
	const { query } = props;

	const message = 'Nothing found!';
	const type = 'warning';

	const [loading, setLoading] = useState(true);
	const [contentPage, setContentPage] = useState(1);
	const [searchFilms, setSearchFilms] = useState({});
	const debouncedQuery = useDebounce(query, 700);

	useEffect(() => {
		const requestSearchFilms = async () => {
			setLoading(true);

			try {
				const response = await MovieService.getSearchFilms(
					debouncedQuery,
					contentPage
				);

				setSearchFilms(response);
				setLoading(false);
			} catch (err) {
				console.error('Get data error:', err);
				setLoading(false);
			}
		};

		requestSearchFilms();
	}, [debouncedQuery, contentPage]);

	return (
		<>
			{loading ? (
				<Preloader />
			) : (
				<>
					<ul className={styles.wrapper}>
						{searchFilms?.results ? (
							searchFilms.results.map(item => {
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
					{searchFilms.total_pages > 20 && (
						<PaginationPages
							contentPage={contentPage}
							setContentPage={setContentPage}
							totalPages={searchFilms.total_pages}
						/>
					)}
				</>
			)}
		</>
	);
};
