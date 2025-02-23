import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';
import styles from './Preloader.module.css';

export const Preloader = () => (
	<Flex className={styles.wrapper} align="center" gap="middle">
		<Spin indicator={<LoadingOutlined spin />} size="large" />
	</Flex>
);
