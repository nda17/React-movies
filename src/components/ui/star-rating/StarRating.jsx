import { Rate } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { SessionIdContext } from '../../../App';
import MovieService from '../../../services/films/films.service';
import styles from './StarRating.module.css';

export const StarRating = ({ id, userStar }) => {
	const { sessionId } = useContext(SessionIdContext);
	const [rating, setRating] = useState(0);

	const handleRatingChange = async (id, value) => {
		if (value === userStar || value === 0) {
			return;
		}

		setRating(value);

		try {
			await MovieService.addRateFilm(id, value, sessionId);

			setRating(value);
		} catch (err) {
			console.error('Added rate error:', err);
		}
	};

	useEffect(() => {
		userStar ? setRating(userStar) : setRating(0);
	}, [userStar]);

	return (
		<Rate
			className={styles.star}
			onChange={e => handleRatingChange(id, e)}
			value={rating}
			allowHalf
			count={10}
		/>
	);
};
