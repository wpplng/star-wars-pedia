import React from 'react';
import StormTrooperSad from '../assets/images/StromTrooperSad.gif';

const NotFound = () => {
	return (
		<div className='text-center mt-5'>
			<img src={StormTrooperSad} className='mb-4' alt='BB-8 bobbing' />
			<h1 className='mb2'>Sorry</h1>
			<p>That page is missing, like most Storm Troopers</p>
		</div>
	);
};

export default NotFound;
