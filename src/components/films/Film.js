import React from 'react';

const Film = ({ film }) => {
	return (
		<>
			<h5 className='mb-1'>{film.title}</h5>
			<p className='mb-1'>
				<strong>Episode:</strong> {film.episode_id}
			</p>
			<p className='mb-1'>{film.opening_crawl}</p>
			<p className='mb-1'>
				<strong>Director:</strong> {film.director}
			</p>
		</>
	);
};

export default Film;
