import React from "react"
import {BiRupee} from "react-icons/bi";
import {IoIosArrowForward} from "react-icons/io"
import mapLocation from "../../assets/Icon map-location-arrow.svg";
import { Button } from "react-bootstrap";

import "./offer-card.css"

const OfferCard =(props)=>{
    const {type, feature_1,feature_2} = props
    return (
        <div style ={{boxShadow: "0px 3px 6px #00000029", padding:"2%",backgroundColor:"white",
            borderRadius: "10px", maxWidth:"20vw",marginRight:"10%",
            opacity: "1"}}>
            <p style={{textAlign:"center",font: " bold 3vh Poppins",letterSpacing: "0px",color: "#2A3647",marginTop:"10%" }}>{type}</p> 
            <p className="offer-feature"><img src={mapLocation} alt="" /><BiRupee />{feature_1}</p>
            <p className="offer-feature"><img src={mapLocation} alt="" /><BiRupee />{feature_2}</p>
            <div>
                <Button variant="dark" style ={{padding:"3% 10% 3% 10%", marginTop:"5%",marginLeft:"auto",marginRight:"auto"}} >Book Now <IoIosArrowForward /></Button>
            </div>
            
        </div>
    )
}

export default OfferCard;