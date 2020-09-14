import React from 'react';
import { Link } from 'react-router-dom';

const Person = ({ person }) => {
	const [endpoint, id] = person.url
		.replace('http://swapi.dev/api/', '')
		.slice(0, -1)
		.split('/');

	// return (
	// 	<>
	// 		<Link to={id} state={{ person }}>
	// 			{' '}
	// 			<h5 className='mb-1'>{person.name}</h5>
	//

	// 		<li className='mb-1'>
	// 			<strong>Gender:</strong> {person.gender}
	// 		</li>
	// 	</>
	// );

	return (
		<div className='card mb-3'>
			<Link to={id} state={{ person }}>
				<div className='card-body mb-1'>
					<h5 className='card-title'>{person.name}</h5>
				</div>
			</Link>

			<ul className='list-group list-group-flush'>
				<li className='list-group-item'>
					Gender <strong>{person.gender}</strong>
				</li>
				<li className='list-group-item'>
					Born <strong>{person.birth_year}</strong>
				</li>
				<li className='list-group-item'>
					In <strong>{person.films.length}</strong> films
				</li>
			</ul>
		</div>
	);
};

export default Person;
