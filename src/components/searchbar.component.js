import React from 'react'
import { MdSearch as SearchIcon } from 'react-icons/md'

function SearchBar({
	placeholder = 'Buscar Hash',
	width = '400px',
	inputRef = null,
	...rest
}) {
	return (
		<div className='search-bar' style={{ width }}>
			<input
				{...rest}
				ref={inputRef}
				type='text'
				className='search-bar__input'
				placeholder={placeholder}
			/>
			<SearchIcon className='search-bar__icon' size={32} />
		</div>
	)
}

export default React.memo(SearchBar)