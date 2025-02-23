import { Tabs } from 'antd';
import { staticMenu } from './data/menu.data';

export const StaticMenu = props => {
	const { changePage = Function.prototype } = props;

	return (
		<Tabs defaultActiveKey="1" items={staticMenu} onChange={changePage} />
	);
};
