import clsx from 'clsx';
import { useContext } from 'react';
import { GenresContext } from '../../../App';
import stub from '../../../assets/images/stub.png';
import { IMAGE_BASE_URL } from '../../../config/api.config';
import { genresSlice } from '../../../utils/genres-slice';
import { Description } from '../description/Description';
import { ReleaseDate } from '../release-date/ReleaseDate';
import { StarRating } from '../star-rating/StarRating';
import { TagGenre } from '../tag-genre/TagGenre';
import { TitleCard } from '../title-card/TitleCard';
import styles from './FilmCard.module.css';

export const FilmCard = ({
	id,
	poster,
	title,
	rating,
	userStar,
	releaseDate,
	genresIds,
	description
}) => {
	const { genres } = useContext(GenresContext);

	const filmGenres = genresSlice(genresIds);

	return (
		<div className={styles.wrapper}>
			<img
				className={clsx(styles['image-desktop'])}
				src={poster ? `${IMAGE_BASE_URL}${poster}` : stub}
				alt={poster ? title : 'Poster'}
			/>
			<div className={clsx(styles['right-section'])}>
				<div className={clsx(styles['first-section'])}>
					<img
						className={clsx(styles['image-mobile'])}
						src={poster ? `${IMAGE_BASE_URL}${poster}` : stub}
						alt={poster ? title : 'Poster'}
					/>

					<div className={styles.info}>
						<div className={clsx(styles['information-wrapper'])}>
							<TitleCard title={title} />
							<span
								className={styles.rating}
								style={{
									border: `2px solid ${
										rating < 3
											? '#e90000'
											: rating > 3 && rating < 5
												? '#e97E00'
												: rating > 5 && rating < 7
													? '#e9D100'
													: '#66E900'
									}`
								}}
							>
								{rating.toFixed(1)}
							</span>
						</div>
						<ReleaseDate releaseDate={releaseDate} />
						<div className={styles.genres}>
							{genres?.map(item => {
								return (
									filmGenres.includes(item.id) && (
										<TagGenre key={item.id} genre={item.name} />
									)
								);
							})}
						</div>
					</div>
				</div>
				<div>
					<Description text={description || 'No description'} />
					<StarRating id={id} userStar={userStar} />
				</div>
			</div>
		</div>
	);
};
