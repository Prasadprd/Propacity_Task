import React from "react"

import {AiOutlineCopyrightCircle} from "react-icons/ai"

import "./footer.css"

const Footer =()=>{
    return (
        <div className="container-fluid footer-container">
            <div className="row" style={{justifyContent:"space-evenly",padding:"2% 5%",margin:"2% 5%",font:"poppins",color:"#F3F3F3"}}>
                <div className="col-6">Copyright <AiOutlineCopyrightCircle /> 2020 | All rights reserved</div>
                <div className="col-6">Digital media planned by propacity</div>
            </div>
            
        </div>
    )
}

export default Footer ;