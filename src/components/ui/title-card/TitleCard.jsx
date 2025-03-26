import { Typography } from 'antd';
import styles from './TitleCard.module.css';

export const TitleCard = ({ title }) => {
	const { Title } = Typography;

	return (
		<Title className={styles.title} level={4}>
			{title}
		</Title>
	);
};
