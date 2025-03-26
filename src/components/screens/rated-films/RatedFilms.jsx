import { AlertBanner } from '../../ui/alert-banner/AlertBanner';
import { FilmCard } from '../../ui/film-card/FilmCard';
import { PaginationPages } from '../../ui/pagination-pages/PaginationPages';
import { Preloader } from '../../ui/preloader/Preloader';
import styles from './RatedFilms.module.css';

export const RatedFilms = ({
	loading,
	ratedFilms,
	userRate,
	contentPageRatedFilms,
	setContentPageRatedFilms = Function.prototype
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
						{ratedFilms?.results?.length ? (
							ratedFilms.results.map(film => {
								return (
									<li key={film.id} className={styles.card}>
										<FilmCard
											id={film.id}
											poster={film.poster_path}
											title={film.title}
											rating={film.vote_average}
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
					{ratedFilms.total_pages > 1 && (
						<PaginationPages
							contentPage={contentPageRatedFilms}
							setContentPage={setContentPageRatedFilms}
							totalPages={ratedFilms.total_pages}
						/>
					)}
				</>
			)}
		</>
	);
};
