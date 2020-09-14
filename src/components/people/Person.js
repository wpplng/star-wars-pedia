import React from 'react';
import { Link } from 'react-router-dom';
import { getIdFromUrl } from '../../helpers';

const Person = ({ person }) => {
	const personId = getIdFromUrl(person.url);

	return (
		<div className='card mb-3'>
			<div className='card-body mb-1'>
				<h5 className='card-title'>
					<Link to={personId} state={{ person }}>
						{person.name}
					</Link>
				</h5>
			</div>

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
