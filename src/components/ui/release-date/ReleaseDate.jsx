import { Typography } from 'antd';
import { formatDate } from '../../../utils/format-date';
import styles from './ReleaseDate.module.css';

export const ReleaseDate = ({ releaseDate }) => {
	const { Text } = Typography;

	return (
		<Text className={styles.text} type="secondary">
			{releaseDate ? formatDate(releaseDate) : 'No data'}
		</Text>
	);
};
