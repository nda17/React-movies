import { Tabs } from 'antd';
import { staticMenu } from './data/menu.data';

export const StaticMenu = props => {
	const { setMenuPage = Function.prototype } = props;

	const handleChangePage = key => {
		setMenuPage(key);
	};

	return (
		<Tabs
			defaultActiveKey="1"
			items={staticMenu}
			onChange={handleChangePage}
		/>
	);
};
