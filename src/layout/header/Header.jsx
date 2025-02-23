import { Tabs } from 'antd';
import { SearchForm } from '../../components/search-form/SearchForm';
import styles from './Header.module.css';

export const Header = props => {
	const {
		menuPage,
		dataMenu,
		changePage = Function.prototype,
		query,
		setQuery = Function.prototype
	} = props;

	return (
		<header className={styles.header}>
			<Tabs defaultActiveKey="1" items={dataMenu} onChange={changePage} />
			{menuPage === 1 && <SearchForm query={query} setQuery={setQuery} />}
		</header>
	);
};
