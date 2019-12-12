import React from 'react';
import "./BottomBar.css";

const send = <img src={require("../assets/desktopLarge/send.png")} className="Logo" alt="logo" />
const dialogue = () =>{
    
    alert("Message sent!");
}

function BottomBar() {
    return (
        <div className="navbar-container">
            <div className="links-container">
                <div className="logoDiv">
                    <img src={require("../assets/navbar/LOGO.png")} className="Logo" alt="logo" />
                </div>
                <div className="firstColumn">
                    <a href="#home">Home</a>
                    <a href="#discovery">Discovery</a>
                    <a href="#photos">Photos</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="secondColumn">
                    <a href="#about">About</a>
                    <a href="#help">Help</a>
                    <a href="#terms">Terms</a>
                    <a href="#guideLines">Guidelines</a>
                </div>
                <div className="thirdColumn">
                    <a href="#testimonials">Testimonials</a>
                    <a href="#advertise">Advertise</a>
                    <a href="#integrations">Integrations</a>
                    <a href="#careers">Careers</a>
                </div>
            </div>

            <div className="emailBlock">
                <div className="input-group mb-3" id="sendMail">
                    <input id="sendInput" type="text" className="form-control" placeholder="Email" aria-label="" aria-describedby="basic-addon1" />
                    <div className="input-group-prepend">
                        <button className="btn btn-outline-secondary" type="button" id="sendButton" onClick={()=>dialogue()}>{send}</button>
                    </div>
                </div>
                <label id="emailInfo">Stay in touch with us for the freshest products!</label>
            </div>

            <div className="socialLinksBar">

                <img src={require("../assets/navbar/instagram.png")} className="Instagram" alt="instagram" />
                <img src={require("../assets/navbar/twitter.png")} className="Twitter" alt="twitter" />
                <img src={require("../assets/navbar/facebook.png")} className="Facebook" alt="facebook" />
                <img src={require("../assets/navbar/web.png")} className="Web" alt="web" />

            </div>



        </div>
    )
}
export default BottomBar;