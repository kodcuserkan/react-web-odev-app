import React from 'react'
import "./MiddlePart.css"

function MiddlePart() {
    return (
        <div className="containerMiddle">
            <div className="titleContainer"><h3>TRENDING</h3></div>
            <div className="trendingTopicsDiv">
                <div className="TTopic">
                    <img src={require("../assets/desktopLarge/firstImg.png")} className="TTopicImg" alt="" id="ttopicimg" />
                    <h4 className="trendsTopic">Dolore magna aliqua</h4>
                    <h5 className="trendsTopicInfo">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</h5>
                    <div className="elapsedTimeDiv">
                        <img src={require("../assets/desktopLarge/time.png")} className="TimePic" alt="" id="timePic" />
                        <i className="TimeScripts">&nbsp;&nbsp;2m ago</i>
                    </div>

                </div>
                <div className="TTopic">
                    <img src={require("../assets/desktopLarge/secImg.png")} className="TTopicImg" alt="" id="ttopicimg" />
                    <h4 className="trendsTopic">Morbi eleifend a libero</h4>
                    <h5 className="trendsTopicInfo">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</h5>
                    <div className="elapsedTimeDiv">
                        <img src={require("../assets/desktopLarge/time.png")} className="TimePic" alt="" id="timePic" />
                        <i className="TimeScripts">&nbsp;&nbsp;2m ago</i>
                    </div>

                </div>
                <div className="TTopic">
                    <img src={require("../assets/desktopLarge/thrdImg.png")} className="TTopicImg" alt="" id="ttopicimg" />
                    <h4 className="trendsTopic">Morbi eleifend a libero</h4>
                    <h5 className="trendsTopicInfo">Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.</h5>
                    <div className="elapsedTimeDiv">
                    <img src={require("../assets/desktopLarge/time.png")} className="TimePic" alt="" id="timePic" />
                    <i className="TimeScripts">&nbsp;&nbsp;2m ago</i>
                </div>

                </div>
            </div>

        </div>
    )
}
export default MiddlePart;