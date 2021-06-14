import React from "react"
import image from "../../assets/image/image.png"
import arrow from "../../assets/Icon map-location-arrow.svg"
import {MdKeyboardArrowDown} from "react-icons/md"

import "./project-specification.css"

const Specification =()=>{
    const specifications =["Bathroom","Kitchen","Flooring","Common"]
    const bedroomDetails =[
        "Bedrooms with En-suit bathrooms",
        "Floor-to-floor heigh between 3.25-3.6 m",
        "Master bedrooms with floor-to-ceiling Corner windows"
    ]
    return(
        <div className="container-fluid ">
            <div className="row specs-text"><p style={{marginBottom:"0%"}}>Project Specification</p></div>
            <div className="row">
                <div className="col" style={{padding:"1% 2%",margin:"1% 2%"}}>
                    <img className="image" src={image} alt="" style={{ maxWidth:"50vw",maxHeight:"50vh"}}/>
                </div>
                <div className="col" style={{padding:"1% 2%",margin:"1% 2%",maxWidth:"30vw",maxHeight:"30vh"}}>
                    <div className="row">
                        <div className="row bedroom-header" > 
                            <p style={{textAlign:"center",margin:"2% 5% 2% 5%",
                                font: "3vh Poppins",
                                letterSpacing: "0.19px",color: "#F3F3F3"}}>
                                    Bedrooms
                            </p> 
                        </div> 
                        <div className="row" style={{background: "#F3F3F3 padding-box",border: "1px solid #2C2E4080"}}> 
                            {bedroomDetails.map(bedroom =>{
                                return (
                                    <div style={{display:"flex"}}>
                                        <img src={arrow} alt="" style={{color:"red" , maxWidth:"1.5vw", margin:"1%"}}/>
                                        <p style={{marginBottom:"0%",padding:"2%",font: "normal normal normal 2.5vh Poppins",
                                            color: "#2C2E40",textTransform: "capitalize"}}> {bedroom}</p>
                                    </div>
                                    
                                )
                            })}
                        </div>
                    </div>
                    <div className="row">
                        {
                            specifications.map(spec=>{
                                return <div className="row" style={{background: "#F3F3F3 0% 0% no-repeat padding-box",
                                    border: "1px solid #2C2E4080",padding:"2% 2%",textAlign:"center"}}> <p style={{marginBottom:"0%"}}>{spec} <MdKeyboardArrowDown /> </p></div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specification;