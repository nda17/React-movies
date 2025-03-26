import { Typography } from 'antd';
import { useState } from 'react';
import styles from './Description.module.css';

export const Description = ({ text }) => {
	const { Text } = Typography;
	const [isActive, setIsActive] = useState(false);

	const handleVisibleText = () => {
		setIsActive(!isActive);
	};

	return (
		<Text
			onClick={handleVisibleText}
			className={`${styles.text} ${isActive ? styles.active : ''}`}
		>
			{text}
		</Text>
	);
};
