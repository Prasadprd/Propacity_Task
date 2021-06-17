import React from "react"
import { Button } from "react-bootstrap"
import {FaCaretRight} from "react-icons/fa"
import icon from "../../assets/Icon map-location-arrow.svg"
import image from "../../assets/image/image.png"
import HighlightCarousel from "../carasoul/highlight-carousel"
import ImageCarousel from "../carasoul/image-carasoul"
import AmenetiesSwiper from "../Swiper/ameneties-swiper"
import "./project-highlights.css"

const ProjectHighlights = ()=>{

    const highlights = [
        "Luxurious 2,3 & 4 BHK apartments with spectacular views",
        "Units spread across 3 High-Rise Towers: Avyan, Arav, Ahan",
        "33% of apartments are dual aspect",
        "St. Xavier’s College & St. Mary’s School Within 8 km",
        "Domestic and Mumbai International Airport within 16 Km",
        "Video Door Phone | 24x7 CCTV"
    ]

    return (
        <div className="container-fluid highlights-container" >
            <div className="row" style={{padding:"5%"}}>
                <div className="col-12 col-md-6">
                    <div className=" row heading">
                        <p>Project Highlights</p>
                    </div>
                    <div className="row">
                        {highlights.map(highlight => {
                            return <p key={highlight}
                                style={{font: "2vh Poppins",
                                color: "#2C2E40",
                                textTransform: "capitalize"}}><FaCaretRight color="#BA8C5F"/> {highlight}</p>
                        })}
                    </div>
                    <div style={{padding:"5%",paddingBottom:"0%"}}>
                        <Button variant="dark">Download Brochure</Button>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    < HighlightCarousel />
                </div>
            </div>
            <div className="row" style={{padding:"0%"}}>
                <p style={{font:"4vh JelesW01-Regular",letterSpacing: "0.24px",color: "#2C2E40",maxWidth:"fit-content",marginLeft:"auto",marginRight:"auto"}}>
                    Amenities <p className="d-none d-md-inline">For Extraordinary Lifestyle </p> 
                </p>
            </div>
            <div className="row">
                < AmenetiesSwiper />
            </div>
        </div>
    )
}

export default ProjectHighlights;