import React, { useState } from 'react';
import "./MainPart.css";



function MainPart(props) {
     

    const [orderData_, setOrderData_] = useState(props.orderData);


    let topicData_ = (orderData_) => {
        
        if (orderData_===1) {
            return props.topicData
        } else if (orderData_===2) {
            return "TECHNOLOGY";
        } else {
            return "HEALTH";
        }

    }
    let titleData_ = (orderData_) => {
        
        if (orderData_===1) {
            return props.titleData
        } else if (orderData_===2) {
            return "New IPhone Released!";
        } else {
            return "Is Brushing Too Much Healthy?";
        }

    }
    
    
   
    let infoData_ = (orderData_) => {
        
        if (orderData_===1) {
            return props.infoData
        } else if (orderData_===2) {
            return "We'll say it now: the iPhone 12 needs to be a huge change to Apple's smartphone. The iPhone 11 range brought, well, very little in terms of an upgrade.";
        } else {
            return "While teeth themselves are hard, the gums that surround them are not. You do need to clean along the line where the gum meets your teeth";
        }

    }
    return (
        <div className="MainPart">
            <div className="mainWindow">
                {getPics(orderData_)}
            </div>
            <div className="information">
                <div className="moreNewsDivs">
                    <div className="moreNewsDiv1">
                        <h3>MORE NEWS</h3>
                    </div>
                    <div className="moreNewsDiv2">
                        <button className="previous-round" onClick = {() => setOrderData_(previous(orderData_))} >&#8249;</button>
                        &nbsp;&nbsp;&nbsp;
                        <button href="/#" className="next-round" onClick = {() => setOrderData_(next(orderData_))} >&#8250;</button>
                    </div>
                    
                </div>
                <hr />
                <div className="topicDiv">
                    <h4 className="topicData">{topicData_(orderData_)}</h4>
                    <h4 className="titleData">{titleData_(orderData_)}</h4>
                    <h5 className="infoData">{infoData_(orderData_)}</h5>
                    <div className="elapsedTimeDiv">
                        <img src={require("../assets/desktopLarge/time.png")} className="TimePic" alt="" id="timePic" />
                        <i className="TimeScripts">&nbsp;&nbsp;2m ago</i>
                    </div>
                </div>
            </div>
        </div>
    )
}


function previous(orderData_) {

    let newOrderData;

    if (orderData_ === 3) {
        newOrderData = 2;
        return newOrderData;       
    } else if (orderData_ === 1) {
        newOrderData = 3;
        return newOrderData;
    }else {
        newOrderData = 1;
        return newOrderData;
    }
}

function next(orderData_) {

    let newOrderData;

    if (orderData_ === 3) {
        newOrderData = 1;
    } else if (orderData_ === 2) {
        newOrderData = 3;
    }else {
        newOrderData = 2;
    }
    return newOrderData;
}

const getPics = (picOrder) => {

    if (picOrder === 1) {
        return <img src={require("../assets/desktopLarge/mainImage.png")} className="MainImage" alt="" id="mainImage" />      
    }
    else if (picOrder === 2) {
        return <img src={require("../assets/desktopLarge/bridge.png")} className="MainImage" alt="" id="mainImage" />      
    }
    else  {
        return <img src={require("../assets/desktopLarge/forest.png")} className="MainImage" alt="" id="mainImage" />      
    }
}



export default MainPart;