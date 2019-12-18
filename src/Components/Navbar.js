import React from 'react';
import "./Navbar.css"

function Navbar() {
    return (
        <header className='Header'>
            <div className="">
                <nav role="navigation">
                    <div id="menuToggle">
                        <input type="checkbox" />
                        <img src={require("../assets/navbar/LOGO.png")} className="Logo" alt="logo" />
                        <ul id="menu">
                            <img src={require("../assets/navbar/LOGO.png")} className="MobileLogo" alt="mobileLogo" />
                            <br />
                            <br />
                            <br />
                            <div className="mobileSideBar">
                                <img src={require("../assets/desktopLarge/homeImg.png")} className="SBImg" alt="" />
                                <a href="/#"><li>HOME</li></a>
                            </div>
                            <div className="mobileSideBar">
                                <img src={require("../assets/desktopLarge/discoverImg.png")} className="SBImg" alt="" />
                                <a href="/#"><li>DISCOVERY</li></a>
                            </div>
                            <div className="mobileSideBar">
                                <img src={require("../assets/desktopLarge/photosImg.png")} className="SBImg" alt="" />
                                <a href="/#"><li>PHOTOS</li></a>
                            </div>
                            <div className="mobileSideBar">
                                <img src={require("../assets/desktopLarge/mailImg.png")} className="SBImg" alt="" />
                                <a href="/#"><li>CONTACT</li></a>
                            </div>
                            <div className="mobileSideBar">
                                <img src={require("../assets/desktopLarge/PPImg.png")} className="SBImg" alt="" />
                                <a href="/#" ><li>PROFILE</li></a>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
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