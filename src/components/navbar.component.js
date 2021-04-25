import React, { useState ,StyleSheet,View} from 'react'
 
//import defaultProfile from 'assets/img/placeholder-profile.jpg'
import { NavLink } from 'react-router-dom'
import SearchBar from './searchbar.component'
import { FaCog } from 'react-icons/fa';

// Import assets
import Alypay from '../assets/img_AlyPay.png';

export default function Navbar() {
	const Roles = {
		1: 'Propietario',
		2: 'Gerente',
		3: 'Cajero',
	}

	const [isLogin, setIsLogin] = useState(true)

	const openModal = () => {}
	const closeModal = () => {}

	if (!isLogin) return null
 
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

				<SearchBar/>
				
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
					{ <FaCog size="25"  style={{color:'yellow',marginLeft:'3px'}}/> }
				</div>

			</nav>
			
		</header>
	)
}
