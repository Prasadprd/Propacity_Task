import React from "react"
import { Button } from "react-bootstrap"

import "./register-card.css"

const RegisterCard =()=>{

    return <div className="register-card-container">
        <div className="row" style={{font:"5vh poppins",color:"white",textAlign:"center"}}>
            <p style={{marginBottom:"0%",padding:"2% 10%"}}>Register your interest</p> 
        </div>
        <div className="row" style={{padding:"2% 5%"}}>
            <div className="col-8" >
                <input className="input" type="text" placeholder="Enter your name*" />
                <input className="input" type="text" placeholder="Enter your Email*" />
                <input className="input" type="text" placeholder="Enter your Mobile No.*" />
            </div>
            <div className="col-4" style={{alignSelf:"center"}}>
                <Button variant="dark" style={{border:"2px solid white",padding:"3% 30% 3% 30%"}}>Submit</Button>
            </div>
        </div>
    </div>
}

export default RegisterCard