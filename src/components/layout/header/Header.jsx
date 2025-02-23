import { SearchForm } from '../../ui/search-form/SearchForm';
import { StaticMenu } from '../../ui/static-menu/StaticMenu';
import styles from './Header.module.css';

export const Header = props => {
	const {
		menuPage,
		setMenuPage = Function.prototype,
		query,
		setQuery = Function.prototype
	} = props;

	return (
		<header className={styles.header}>
			<StaticMenu setMenuPage={setMenuPage} />
			{menuPage === 1 && <SearchForm query={query} setQuery={setQuery} />}
		</header>
	);
};
