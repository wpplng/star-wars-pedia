import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getPeople } from '../../services/SWAPI';

const PersonDetails = () => {
	const location = useLocation();
	const person = location.state;
	const { personId } = useParams();
	// const id = params.person;

	// console.log('location', location);
	// console.log('person', person);
	// console.log('id', person);

	const homeWorld = person.person.homeworld.replace(
		'http://swapi.dev/api/',
		''
	);

	// const { data } = useQuery(['people', id], getPeople);

	// console.log('data', data);

	return (
		<>
			<h5 className='mb-1'>{person.person.name}</h5>
			<p className='mb-1'>
				<strong>Gender:</strong> {person.person.gender}
			</p>
			<p className='mb-1'>
				<strong>Height:</strong> {person.person.height}
			</p>
			<p className='mb-1'>
				<strong>Birth year:</strong> {person.person.birth_year}
			</p>
			<p>
				<Link to={'/' + homeWorld} className='btn btn-sm btn-primary'>
					Home world
				</Link>
			</p>
		</>
	);
};

export default PersonDetails;
