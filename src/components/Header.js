import './Header.css';
import React from 'react'

const Header = ({ searchValue, setSearchValue }) => {

    return (
        <div className='header'>
            <span>OMDb Movie App</span>
            <input
                value={searchValue}
                onChange={(event) => setSearchValue(event.target.value)}
                placeholder='Search for a movie...'></input>
        </div>
    )
}

export default Header