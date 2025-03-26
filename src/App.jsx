import { createContext, useEffect, useState } from 'react';
import { Footer } from './components/layout/footer/Footer';
import { Header } from './components/layout/header/Header';
import { Main } from './components/layout/main/Main';
import MovieService from './services/films/films.service';

export const SessionIdContext = createContext(null);
export const GenresContext = createContext(null);

export const App = () => {
	const [sessionId, setSessionId] = useState(null);

	const [query, setQuery] = useState('Return');
	const [page, setPage] = useState(1);
	const [genres, setGenres] = useState([]);

	//Инициализация sessionId
	useEffect(() => {
		const initialGuestSession = async () => {
			try {
				const response = await MovieService.createGuestSession();

				const newSessionId = response?.guest_session_id;
				localStorage.setItem('sessionId', newSessionId);
				const sessionId = localStorage.getItem('sessionId');
				setSessionId(sessionId);
			} catch (err) {
				console.error('Create guest session error:', err);
			}
		};

		const currentStorage = localStorage.getItem('sessionId');

		if (!currentStorage) {
			initialGuestSession();
		} else {
			setSessionId(currentStorage);
		}
	}, []);

	//Запрос списка жанров фильмов
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
				page={page}
				setPage={setPage}
				query={query}
				setQuery={setQuery}
			/>
			<SessionIdContext.Provider value={{ sessionId }}>
				<GenresContext.Provider value={{ genres }}>
					<Main page={page} query={query} />
				</GenresContext.Provider>
			</SessionIdContext.Provider>
			<Footer />
		</>
	);
};
