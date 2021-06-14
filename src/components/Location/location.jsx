import React from "react"
import {RiArrowRightSFill} from "react-icons/ri"
import image from "../../assets/image/image.png"

import "./location.css"

const Location =()=>{
    const nearbyEssentials_1=[
        "Mumbai International Airport: 16.1 Km",
        "Wockhardt Hospital: 3.4 KM",
        "TC Grand Central: 2.7 KM"
    ]

    const nearbyEssentials_2 =[
        "St. Xavier’s College: 5.8 Km",
        "St. Mary’s School: 2.0 KM",
        "The Willingdon Sports Club: 4.7KM"
    ]
    return (
        <div className="container-fluid location-container">
            <div className="row location-text"><p>Location Advantages</p> </div>
            <div className="row location-info" >Strategically located at Rani  Baug,  Byculla, Piramal Realty’s Aranya brings world-class hospitals, academic institutions, IT and entertainment hubs closer to the residents. The upcoming Marine Drive 2.0 is further set to offer seamless connectivity to the Eastern Harbour and dining and art destinations.</div>
            <div className="row " style={{padding:"2% 15%"}}>
                <div className="row location-nearby">
                    {
                        nearbyEssentials_1.map(unit =>{
                            return <div className="col" style={{display:"flex"}}><RiArrowRightSFill style={{color:"orange"}} /> <p>{unit}</p> </div>
                        })
                    }
                </div>
                <div className="row location-nearby">
                    {
                        nearbyEssentials_2.map(unit =>{
                            return <div className="col" style={{display:"flex"}}><RiArrowRightSFill style={{color:"orange"}} /><p>{unit}</p></div>
                        })
                    }
                </div>
                <div className="row image-container ">
                    <img src={image} alt="" style={{maxWidth:"60vw" , maxHeight:"70vh",marginLeft:"auto",marginRight:"auto"}} />
                </div>
            </div>
        </div>
    )
}

export default Location ;