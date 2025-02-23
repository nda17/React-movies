import { Alert } from 'antd';
import styles from './AlertBanner.module.css';

export const AlertBanner = props => {
	const { message, description, type } = props;
	return (
		<div className={styles.wrapper}>
			<Alert
				message={message}
				description={description || null}
				type={type}
			/>
		</div>
	);
};
