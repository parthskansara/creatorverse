import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <nav className='nav-bar'>
            <Link to="/">
                <p>CreatorVerse</p>
            </Link>
            <Link to="/add">
                <button className='add-creator-btn'>
                    Add a New Creator
                </button>
            </Link>
        </nav>
    );

};


export default Navigation;