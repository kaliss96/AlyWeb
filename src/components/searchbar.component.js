import React,{useRef} from 'react'
import { MdSearch as SearchIcon } from 'react-icons/md'

function SearchBar({
	placeholder = 'Buscar Hash',
	width = '400px',
	inputRef = null,
	searchHandle,
	...rest
}) {
	
	const searchText = useRef({});
	
	return (
		<div className='search-bar' style={{ width }}>
			<input
				{...rest}
				ref={searchText}
				type='text'
				className='search-bar__input'
				placeholder={placeholder}
			/>
			<SearchIcon className='search-bar__icon' onClick={()=>searchHandle(searchText.current.value)} size={32} />
		</div>
	)
}

export default React.memo(SearchBar)