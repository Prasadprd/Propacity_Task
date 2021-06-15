import React ,{useState}from "react"
import logo from "../../assets/logo.svg"
import call from "../../assets/Icon zocial-call.svg"
import {Button ,Modal} from "react-bootstrap"
import "./header.css"
import EnquireModal from "../Modal/enquire-modal"
const Header =()=>{
    const [show ,setShow]= useState(false)

    const handleClose =()=>{
        return setShow(false)
    }

    const handleShow=()=>setShow(true)

    const links =["Home","Resedenties" , "Ameneties" , "Payment plans" , "Floor plans"]
    return (
        <div className="container-fluid" style={{backgroundColor:"FFFFFF",boxShadow: "0px 5px 8px #00000040"}}>
            <div className="row">
                <div className="col-12 col-md-2">
                    <img src={logo} alt="logo" style={{padding:"5px",margin:"5px", height:"100px"}} />
                </div>
                <div className=" col-12 col-md-6">
                    <div className="row" style={{verticalAlign:"middle" ,height:"100%"}}>
                    {
                        links.map(link=>{
                            return (
                                <div className="col contact-info"
                                    style={{font: "Poppins",color: "#1A3845",
                                    fontSize:"2.5vh",textAlign:"center"}}> <p>{link}</p> </div>
                            )
                        })
                    }
                    </div>
                    
                </div>
                <div className="col"></div>
                <div className="col-sm-3">
                    <div className="row" style={{height:"100%"}}>
                        <div className="col contact-info" style={{font:"2.5vh poppins", color:"#BA8C5F" ,fontWeight:"bolder",display:"flex"}} >
                            <img src={call} alt="contact" />
                            +91 8999874382
                        </div>
                        <div className="col contact-info" >
                            <Button variant="dark" style={{boxShadow: "3px 3px 10px #00000029",
                                    border: "1px solid #2C2E40",font:"poppins",
                                    borderRadius: "10px"}} onClick= {handleShow}>
                                
                                Enquire Now
                            </Button>
                            
                        </div>
                        <EnquireModal show={show} handleClose={handleClose}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;