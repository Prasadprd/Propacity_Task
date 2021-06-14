import React from  "react";
import accomodation from "../../assets/accomodation.svg";
import cardinal from "../../assets/cardinal-points.svg";
import group from "../../assets/Group 125.svg";
import navigation from "../../assets/navigation.svg";
import urbanProperty from "../../assets/urban-property.svg"
import FeaturesIcon from "../Features Icon/features-icon";
import "./features.css"

const Features =()=>{

    const featuresArray_1 =[
        {
            icon : accomodation,
            name :"Configuration",
            details : "2,3 & 4 BHK"
        },
        {
            icon : urbanProperty,
            name :"Possesion",
            details :"Ready to move in"
        },
        {
            icon :group,
            name:"Pricing",
            details :"3.69Cr"
        }
    ]
    const featuresArray_2 =[
        {
            icon: cardinal ,
            name :"Vastu Shastra",
            details : "Vastu complaint"
        },
        {
            icon :navigation,
            name :"Location",
            details: "Rani Baug,Biculla"
        }
    ]
    return (
        <div className="features-container">
            <div className="name-container">
                <p className="name" style={{ backgroundColor:"#ffd9b3",marginBottom:"1%",maxWidth:"fit-content"}}>
                    PIRAMAL ARANYA 
                </p>
                <p className="name">Ultra-Luxurious PROJECT</p>
            </div>
            <div className="feature-icon-container">
            <div className="row justify-content-center" style={{padding:"0%",margin:"0%"}}>
                    {
                        featuresArray_1.map(icon => {
                            return <div className="col">
                                <FeaturesIcon icon={icon.icon} name={icon.name} details={icon.details} />
                            </div>
                        })
                    }
                </div>
                <div className="row "style={{alignContent:"center"}}>
                    {
                        featuresArray_2.map(icon =>{
                            return <div className="col" style={{alignItems:"center"}}>
                                <FeaturesIcon icon={icon.icon} name={icon.name} details={icon.details} />
                            </div>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Features ;