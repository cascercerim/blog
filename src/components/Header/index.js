import React from 'react';
import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
    return (
        <header className="header">
            <nav className="headerMenu">
                <a href="#">Home</a>
                <a href="#">About Me</a>
                <a href="#">Contact Me</a>
            </nav>
            <div>
                Social Media Links
            </div>
        </header>
    )

}

export default Header;
