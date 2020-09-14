import React from 'react';

const Starship = ({ starship }) => {
	return (
		<>
			<h5 className='mb-1'>{starship.name}</h5>
			<p className='mb-1'>
				<strong>Model:</strong> {starship.model}
			</p>
			<p className='mb-1'>
				<strong>Crew:</strong> {starship.crew}
			</p>
			<p className='mb-1'>
				<strong>Passengers:</strong> {starship.passengers}
			</p>
		</>
	);
};

export default Starship;
