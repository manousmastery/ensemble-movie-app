import './Header.css';
import React from 'react'

const Header = () => {
    return (
        <div className='header'>
            <span>OMDb Movie App</span>
            <input placeholder='Search for a movie...'></input>
        </div>
    )
}

export default Header