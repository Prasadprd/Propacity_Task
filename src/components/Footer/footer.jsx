import React from "react"

import {AiOutlineCopyrightCircle} from "react-icons/ai"

import "./footer.css"

const Footer =()=>{
    return (
        <div className="container-fluid footer-container">
            <div className="row" style={{background:"#F3F3F3"}}>
                <p>Disclamer: This is not the official website of the developer, it belongs to authorised channel partner, and is used for information & marketing purposes only. All rights for logo & images are reserved by the developer. By using or accessing this website you agree with the disclaimer without any qualification or limitation. By accessing this website, the viewer confirms that the information including brochures and marketing collaterals on this website are solely for informational purposes only and the viewer has not relied on this information for making any booking/purchase in any project of the company.</p>
           
            </div>
            <div className="row" style={{justifyContent:"space-evenly",padding:"2% 5%",margin:"2% 5%",font:"poppins",color:"#F3F3F3"}}>
                <div className="col-6">Copyright <AiOutlineCopyrightCircle /> 2020 | All rights reserved</div>
                <div className="col-6">Digital media planned by propacity</div>
            </div>
            
        </div>
    )
}

export default Footer ;