import { SearchForm } from '../../ui/search-form/SearchForm';
import { StaticMenu } from '../../ui/static-menu/StaticMenu';
import styles from './Header.module.css';

export const Header = ({
	page,
	setPage = Function.prototype,
	query,
	setQuery = Function.prototype
}) => {
	return (
		<header className={styles.header}>
			<StaticMenu setPage={setPage} />
			{page === 1 && <SearchForm query={query} setQuery={setQuery} />}
		</header>
	);
};
