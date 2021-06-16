import React from "react";
import image from "../../assets/image/image.png"
import nextRight from "../../assets/next-right.svg"
import nextLeft from "../../assets/next-left.svg"
import chatIcon from "../../assets/chat/chat.png"
import Features from "../Features/features";

import "./image.css"
import ImageCarousel from "../carasoul/image-carasoul";

const Image =()=> {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-8">
                    <ImageCarousel />
                </div>
                <div className="col-12 col-md-4" style={{background: "#F3F3F3 0% 0% no-repeat padding-box"}}>
                    
                    <Features />    
                    
                </div>
            </div>
        </div>
    )

}

export default Image