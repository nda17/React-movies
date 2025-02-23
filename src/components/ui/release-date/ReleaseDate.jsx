import { Typography } from 'antd';
import { format } from 'date-fns';
import { enGB } from 'date-fns/locale';
import styles from './ReleaseDate.module.css';

export const ReleaseDate = props => {
	const { Text } = Typography;
	const { releaseDate } = props;

	return (
		<Text className={styles.text} type="secondary">
			{releaseDate
				? format(new Date(releaseDate), 'MMMM dd, yyyy', {
						locale: enGB
					})
				: 'No data'}
		</Text>
	);
};
