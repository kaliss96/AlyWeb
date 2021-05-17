import React from 'react'

//import defaultProfile from 'assets/img/placeholder-profile.jpg'
import { NavLink } from 'react-router-dom'
import SearchBar from '../searchbar.component'
import DropdownMenu from '../Menu/DropdownMenu'

import './navbar.css'

// Import assets
import Alypay from '../../assets/img_AlyPay.png';

export default function Navbar({handleSearch,...props}) {

	return (
		<header className='navbar'>
			
			<nav className='navbar__container'>
				<NavLink exact to='/'>
					<img
						src={Alypay}
						alt='alypay-logo'
						className='navbar__brand'
					/>
				</NavLink>

				<SearchBar searchHandle={handleSearch}/>
				
				<nav className='navbar__options'>				
					<NavLink
						activeClassName='active'
						to='/inicio'
						className='navbar__item'>
						Inicio
					</NavLink>
​
					<NavLink
						activeClassName='active'
						to='/comercios'
						className='navbar__item'>
						Comercios
					</NavLink>

				</nav>
				<div className='navbar__container--user'>
					
					<DropdownMenu/>
				</div>

			</nav>
			
		</header>
	)
}
