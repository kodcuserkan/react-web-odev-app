import React from 'react';
import './Happening.css';
function Happening() {
    return (
        <div className="HappeningDiv">
            <div className="happeningTitle">
                <div><h3>HAPPENING NOW</h3></div>
                <div className="moreNewsDiv2">
                    <button className="previous-round-happen" >&#8249;</button>
                    &nbsp;&nbsp;&nbsp;
                    <button href="/#" className="next-round-happen" >&#8250;</button>
                </div>
            </div>
            <div className="happeningContents">
                <div className="firstCol">
                    <div className="Rows1">
                        <img src={require("../assets/desktopLarge/bridge.png")} className="BigImg" alt="" id="bigImg" />

                    </div>
                    <div className="Rows1">
                        <img src={require("../assets/desktopLarge/forest.png")} className="BigImg" alt="" id="bigImg" />

                    </div>
                </div>
                <div className="secCol">
                    <div className="Rows2">
                        <img src={require("../assets/desktopLarge/elephant.png")} className="SmallPic" alt="" id="smallPics" />
                        <h5>Small title</h5>
                        <div className="smallPicInfo">
                            <img src={require("../assets/desktopLarge/time.png")} className="SmallPic" alt="" id="smallPics" />
                            &nbsp;&nbsp;&nbsp;
                            <i>4h ago by &nbsp;<a className="daysClass" href="/#">Days</a></i>
                        </div>
                    </div>
                    <div className="Rows2">
                        <img src={require("../assets/desktopLarge/parrot.png")} className="SmallPic" alt="" id="smallPics" />
                        <h5>Small title</h5>
                        <div className="smallPicInfo">
                            <img src={require("../assets/desktopLarge/time.png")} className="SmallPic" alt="" id="smallPics" />
                            &nbsp;&nbsp;&nbsp;
                            <i>4h ago by &nbsp;<a className="daysClass" href="/#">Days</a></i>
                        </div>
                    </div>
                    <div className="Rows2">
                        <img src={require("../assets/desktopLarge/jungle.png")} className="SmallPic" alt="" id="smallPics" />
                        <h5>Small title</h5>
                        <div className="smallPicInfo">
                            <img src={require("../assets/desktopLarge/time.png")} className="SmallPic" alt="" id="smallPics" />
                            &nbsp;&nbsp;&nbsp;
                            <i>4h ago by &nbsp;<a className="daysClass" href="/#">Days</a></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Happening;