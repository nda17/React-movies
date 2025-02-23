import { Rate } from 'antd';
import { useEffect, useState } from 'react';
import { getLocalStorage } from '../../../utils/get-local-storage';
import { setLocalStorage } from '../../../utils/set-local-storage';
import styles from './StarRating.module.css';

export const StarRating = props => {
	const { id } = props;

	const [rating, setRating] = useState(0);

	const handleRatingChange = (id, stars) => {
		const currentData = { id: id, stars: stars };

		setLocalStorage('rating', currentData);
		setRating(currentData[0]?.stars);
	};

	useEffect(() => {
		const currentStorage = getLocalStorage('rating');

		if (currentStorage) {
			const stars = currentStorage.filter(item => item.id === id)[0]
				?.stars;
			setRating(stars);
		}
	}, [rating, id]);

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
