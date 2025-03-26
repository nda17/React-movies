import { Tabs } from 'antd';
import { staticMenu } from './data/menu.data';

export const StaticMenu = ({ setPage }) => {
	const handleChangePage = key => {
		setPage(key);
	};

	return (
		<Tabs
			defaultActiveKey="page"
			items={staticMenu}
			onChange={handleChangePage}
		/>
	);
};
