import { Tag } from 'antd';
import styles from './TagGenre.module.css';

export const TagGenre = props => {
	const { genre } = props;

	return <Tag className={styles.tag}>{genre}</Tag>;
};
