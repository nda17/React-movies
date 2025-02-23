import { createContext, useEffect, useState } from 'react';
import { Footer } from './components/layout/footer/Footer';
import { Header } from './components/layout/header/Header';
import { Main } from './components/layout/main/Main';

import MovieService from './services/films/films.service';

export const GenresContext = createContext(null);

export const App = () => {
	const [query, setQuery] = useState('Return');
	const [menuPage, setMenuPage] = useState(1);
	const [genres, setGenres] = useState({});

	useEffect(() => {
		const requestGenres = async () => {
			try {
				const response = await MovieService.getGenresFilms();

				setGenres(response.genres);
			} catch (err) {
				console.error('Get data error:', err);
			}
		};

		requestGenres();
	}, []);

	return (
		<>
			<Header
				menuPage={menuPage}
				setMenuPage={setMenuPage}
				query={query}
				setQuery={setQuery}
			/>
			<GenresContext.Provider value={{ genres }}>
				<Main menuPage={menuPage} query={query} />
			</GenresContext.Provider>

			<Footer />
		</>
	);
};
