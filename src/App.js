import React from 'react';
import { ReactQueryConfigProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import config from './config';
import GlobalFetchingSpinner from './components/GlobalFetchingSpinner';
import ThemeContextProvider from './contexts/ThemeContextProvider';
import Navbar from './components/Navbar';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Films from './components/films/Films';
import FilmDetails from './components/films/FilmDetails';
import People from './components/people/People';
import PersonDetails from './components/people/PersonDetails';
import Planets from './components/planets/Planets';
import Species from './components/species/Species';
import Starships from './components/starships/Starships';
import Vehicles from './components/vehicles/Vehicles';

function App() {
	return (
		<ReactQueryConfigProvider config={config.reactQueryConfig}>
			<ThemeContextProvider>
				<Navbar />

				<div id='App' className='App container py-3'>
					<GlobalFetchingSpinner />
					{/* Router version 6 */}
					<Routes>
						<Route path='/'>
							<Home />
						</Route>

						<Route path='/films'>
							<Route path='/'>
								<Films />
							</Route>
							<Route path='/:filmId'>
								<FilmDetails />
							</Route>
						</Route>

						<Route path='/people/'>
							<Route path='/'>
								<People />
							</Route>
							<Route path=':personId'>
								<PersonDetails />
							</Route>
						</Route>

						<Route path='/planets'>
							<Planets />
						</Route>

						<Route path='/species'>
							<Species />
						</Route>

						<Route path='/starships'>
							<Starships />
						</Route>

						<Route path='/vehicles'>
							<Vehicles />
						</Route>

						<Route path='*' element={<NotFound />} />
					</Routes>
				</div>
				<ReactQueryDevtools initialIsOpen position='bottom-right' />
			</ThemeContextProvider>
		</ReactQueryConfigProvider>
	);
}

export default App;
