import { AlertBanner } from '../../ui/alert-banner/AlertBanner';
import { FilmCard } from '../../ui/film-card/FilmCard';
import { PaginationPages } from '../../ui/pagination-pages/PaginationPages';
import { Preloader } from '../../ui/preloader/Preloader';
import styles from './SearchFilms.module.css';

export const SearchFilms = ({
	loading,
	searchFilms,
	userRate,
	contentPageSearchFilms,
	setContentPageSearchFilms = Function.prototype
}) => {
	const message = 'Nothing found!';
	const type = 'warning';

	return (
		<>
			{loading ? (
				<Preloader />
			) : (
				<>
					<ul className={styles.wrapper}>
						{searchFilms?.results?.length ? (
							searchFilms.results.map(film => {
								return (
									<li key={film.id} className={styles.card}>
										<FilmCard
											id={film.id}
											poster={film.poster_path}
											title={film.title}
											rating={film.vote_average}
											userRate
											userStar={userRate[film.id]}
											releaseDate={film.release_date}
											genresIds={film.genre_ids || film.genres}
											description={film.overview}
										/>
									</li>
								);
							})
						) : (
							<AlertBanner message={message} type={type} />
						)}
					</ul>
					{searchFilms.total_pages > 1 && (
						<PaginationPages
							contentPage={contentPageSearchFilms}
							setContentPage={setContentPageSearchFilms}
							totalPages={searchFilms.total_pages}
						/>
					)}
				</>
			)}
		</>
	);
};
