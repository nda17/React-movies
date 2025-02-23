import { Typography } from 'antd';
import styles from './TitleCard.module.css';

export const TitleCard = props => {
	const { Title } = Typography;
	const { title } = props;

	return (
		<Title className={styles.title} level={4}>
			{title}
		</Title>
	);
};
