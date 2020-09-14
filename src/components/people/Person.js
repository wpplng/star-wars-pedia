import React from 'react';
import { Link } from 'react-router-dom';

const Person = ({ person }) => {
	const [endpoint, id] = person.url
		.replace('http://swapi.dev/api/', '')
		.slice(0, -1)
		.split('/');

	return (
		<>
			<Link to={id} state={{ person }}>
				{' '}
				<h5 className='mb-1'>{person.name}</h5>
			</Link>

			<p className='mb-1'>
				<strong>Gender:</strong> {person.gender}
			</p>
		</>
	);
};

export default Person;
