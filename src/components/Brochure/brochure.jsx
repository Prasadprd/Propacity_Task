import React from "react"
import {Button} from "react-bootstrap"

import "./brochure.css"
const Brochure =()=>{
    return (
        <div className="container-fluid" style={{background:"black",textAlign:"center",padding:"5%"}}> 
            <div>
                <p style={{font: "normal normal normal 5vh JelesW01-Regular",letterSpacing: "0.24px",color: "#F3F3F3"}}>Residence at Aranya</p>
                <p style={{font: "normal normal normal 3vh Poppins",letterSpacing: "0.16px",color: "#F3F3F3"}}>By Piramal Realty</p>
            </div>
            <div style={{font: "normal normal medium 2vh Poppins", margin:"2% 9% 3% 9%",
                         letterSpacing: "0.1px",color: "#F3F3F3"}}>
                Developed by the revered Piramal Realty, Aranya is a perfect amalgamation of modern architecture with state-of-the-art facilities. Sprawling across 7 acres of land, the project is situated in the prime location of Byculla, offering enthralling views of the Arabian Sea and 60-acre Botanical Garden.The floor-to-ceiling window designs paint the room with natural sunlight. 2 BHK homes with RERA Carpet 635-762 SQFT and 3 BHK homes with RERA Carpet 873-920 SQFT
            </div>
            <button className="download-brochure-button"> Download Brochure</button>
        </div>
    )
}

export default Brochure ;