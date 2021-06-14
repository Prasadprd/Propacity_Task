import React from "react";
import image from "../../assets/image/image.png"
import nextRight from "../../assets/next-right.svg"
import nextLeft from "../../assets/next-left.svg"
import chatIcon from "../../assets/chat/chat.png"
import Features from "../Features/features";

import "./image.css"

const Image =()=> {
    return (
        <div className="container-fluid" style={{padding:"0%",position:"relative"}}>
            {/* <div className="image" style={{position:"relative"}}>
                <img src={image} alt="Image" style={{width:"85%",maxHeight:"70vh"}} />
                <div className="image-text">
                    <div className="image-text-1">Views so spectacular.an offer so unique</div>
                    <div className="image-text-2">2 BHK: 3.69 Cr onwards* | 3 BHK: 4.59 Cr onwards*</div>
                    <div className="image-text-3">0% Interest On Home Loan Uptil March 2022</div>
                </div>
                <div className="next-icon-container">
                    <img className="next-icon" src={nextLeft} alt="Slide left" />
                    <img className="next-icon" src={nextRight} alt="Slide right" />
                </div>
                <div className="chat-icon">
                    <img src={chatIcon} alt="Chat with us" style={{maxWidth:"4vh"}} />
                </div>
            </div> */}
            <div className="features">
                <Features />
            </div>
        </div>
    )

}

export default Image