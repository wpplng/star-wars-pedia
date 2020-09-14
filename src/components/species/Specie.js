import React from 'react';

const Specie = ({ specie }) => {
	return (
		<>
			<h5 className='mb-1'>{specie.name}</h5>
			<p className='mb-1'>
				<strong>Classification:</strong> {specie.classification}
			</p>
			<p className='mb-1'>
				<strong>Language</strong> {specie.language}
			</p>
		</>
	);
};

export default Specie;
