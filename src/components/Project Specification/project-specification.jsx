import React from "react"
import image from "../../assets/image/image.png"
import {MdKeyboardArrowDown} from "react-icons/md"
import { Accordion,Card } from "react-bootstrap"

import "./project-specification.css"

const Specification =()=>{
    const specifications =[
        {
            key:"1",
            type:"Bedroom"
        },
        {
            key:"2",
            type:"Bathroom"
        },
        {
            key:"3",
            type:"Kitchen"
        },
        {
            key:"4",
            type:"Flooring"
        },
        {
            key:"5",
            type:"common"
        }
    ]
    const accordionDetails =[
        "Bedrooms with En-suit bathrooms",
        "Floor-to-floor heigh between 3.25-3.6 m",
        "Master bedrooms with floor-to-ceiling Corner windows"
    ]
    return(
        <div className="container-fluid ">
            <div className="row specs-text"><p style={{marginBottom:"0%"}}>Project Specification</p></div>
            <div className="row">
                <div className="col-12 col-md-6" style={{padding:"1% 2%"}}>
                    <img className="image" src={image} alt="" style={{width:"fit-content",height:"fit-content"}}/>
                </div>
                <div className="col-12 col-md-4" style={{padding:"1% 2%",margin:"2% 2%"}}>
                    {/* <div className="row">
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
                        </ div>*/}
                        <Accordion defaultActiveKey="0">
                            {
                                specifications.map(spec=>{
                                    return (
                                        <Card key={spec.key}>
                                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                            {spec.type}<MdKeyboardArrowDown /> 
                                            </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                            <Card.Body>{
                                                accordionDetails.map(detail =>{
                                                    return(
                                                        <div className="row" 
                                                             key={detail}
                                                             style={{background: "#F3F3F3 0% 0% no-repeat padding-box",
                                                                border: "1px solid #2C2E4080",padding:"2% 2%",textAlign:"center"}}> 
                                                                <p style={{marginBottom:"0%"}}>{detail}</p>
                                                        </div>
                            
                                                    )
                                                })
                                            }</Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    )
                                })
                            }
                            
                        </Accordion>
                </div>
            </div>
        </div>
    )
}

export default Specification;