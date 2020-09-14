import React, { useState } from 'react';
import { usePaginatedQuery } from 'react-query';
import MoonLoader from 'react-spinners/MoonLoader';
import { getFilms } from '../../services/SWAPI';
import Film from './Film';

const Films = () => {
	const [page, setPage] = useState(1);

	const { resolvedData, latestData, isLoading, error } = usePaginatedQuery(
		['films', page],
		getFilms
	);

	if (isLoading) {
		return <MoonLoader color={'#F8D41C'} size={50} />;
	}

	if (error) {
		return (
			<div className='alert alert-warning'>
				<h2>
					Sorry, the unlikely event happend and a Stormtrooper
					actually hit something...
				</h2>
				<p>
					<strong>Error message:</strong> {error.message}
				</p>
			</div>
		);
	}

	return (
		<>
			<h2>Films</h2>
			<h3>Page {page}</h3>

			<p>There are {resolvedData.count} films in the database.</p>

			<div className='d-flex mb-3 justify-content-between'>
				<button
					onClick={() =>
						setPage((prevPage) =>
							!latestData || !latestData.previous
								? prevPage
								: prevPage - 1
						)
					}
					disabled={!latestData || !latestData.previous}
					className='btn btn-outline-secondary'
				>
					Previous Page
				</button>

				<button
					onClick={() =>
						setPage((prevPage) =>
							!latestData || !latestData.next
								? prevPage
								: prevPage + 1
						)
					}
					disabled={!latestData || !latestData.next}
					className='btn btn-outline-secondary'
				>
					Next Page
				</button>
			</div>

			<ul className='list-group'>
				{resolvedData.results.map((film, index) => (
					<li className='list-group-item' key={index}>
						<Film film={film} />
					</li>
				))}
			</ul>
		</>
	);
};

export default Films;
