import React from "react"
import image from "../../assets/image/image.png"

import "./project-specification.css"

const Specification =()=>{
    const specifications =["Bathroom","Kitchen","Flooring","Common"]
    const bedroomDetails =[
        "Bedrooms with En-suit bathrooms",
        "Floor-to-floor heigh between 3.25-3.6 m",
        "Master bedrooms with floor-to-ceiling Corner windows"
    ]
    return(
        <div className="container-fluid container">
            <div className="row specs-text"><p style={{marginBottom:"0%"}}>Project Specification</p></div>
            <div className="row">
                <div className="col">
                    <img className="image" src={image} alt="" />
                </div>
                <div className="col">
                    <div className="row">
                        <div className="row " > <p>Bedrooms</p> </div>
                        <div className="row"> 
                            {bedroomDetails.map(bedroom =>{
                                return <p>{bedroom}</p>
                            })}
                        </div>
                    </div>
                    <div className="row">
                        {
                            specifications.map(spec=>{
                                return <div className="row">{spec}</div>
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Specification;