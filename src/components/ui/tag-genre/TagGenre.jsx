import { Tag } from 'antd';
import styles from './TagGenre.module.css';

export const TagGenre = ({ genre }) => {
	return <Tag className={styles.tag}>{genre}</Tag>;
};
