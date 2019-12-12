import React from 'react';
import "./Navbar.css"

function Navbar() {
    return (
        <header className='Header'>
            <img src={require("../assets/navbar/LOGO.png")} className="Logo" alt="logo" />
            <nav className="Nav">
                <div className="dropdown">
                    <button className="btn btn-default" type="button" id="dropdownMenu" data-toggle="dropdown">
                        HOME
                <span className="caret"></span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenu">
                        <li><a href="/#">WORLD NEWS</a></li>
                        <li><a href="/#">TRAVEL</a></li>
                        <li><a href="/#">TECHNOLOGY</a></li>
                        <li><a href="/#">CITY</a></li> 
                        <li><a href="/#">CULTURE </a></li>
                        <li><a href="/#">MORE...</a></li>
                    </ul>

                </div>
                <a href="/">DISCOVERY</a>
                <a href="/">PHOTOS</a>
                <a href="/">CONTACT</a>
                <img src={require("../assets/navbar/pp.png")} className="PP" alt="pp" />
            </nav>
        </header>
    )
}
export default Navbar;