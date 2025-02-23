import { Offline, Online } from 'react-detect-offline';
import { RatedFilms } from '../../screens/rated-films/RatedFilms';
import { SearchFilms } from '../../screens/search-films/SearchFilms';
import { AlertBanner } from '../../ui/alert-banner/AlertBanner';
import styles from './Main.module.css';

export const Main = props => {
	const { menuPage, query } = props;

	const message = 'No network connection!';
	const description = 'Please, try again later or check your connection.';
	const type = 'error';

	return (
		<main className={styles.main}>
			<Online>
				{menuPage === 1 && <SearchFilms query={query} />}
				{menuPage === 2 && <RatedFilms />}
			</Online>
			<Offline>
				<AlertBanner
					message={message}
					description={description}
					type={type}
				/>
			</Offline>
		</main>
	);
};
