import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav className='navbar navbar-expand navbar-dark bg-dark'>
			<div className='container'>
				<Link to='/' className='navbar-brand'>
					<span role='img' aria-label='!?'>
						👾
					</span>{' '}
					StarWarsPedia
				</Link>

				<div className='navbar-collapse'>
					<ul className='navbar-nav ml-auto'>
						<li className='nav-item'>
							<NavLink to='/films' className='nav-link'>
								Films
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/people' className='nav-link'>
								People
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/planets' className='nav-link'>
								Planets
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/species' className='nav-link'>
								Species
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/starships' className='nav-link'>
								Starships
							</NavLink>
						</li>
						<li className='nav-item'>
							<NavLink to='/vehicles' className='nav-link'>
								Vehicles
							</NavLink>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
