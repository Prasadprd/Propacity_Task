import React,{useState} from "react"
import { Button } from "react-bootstrap"
import axios from "axios"

import "./register-card.css"

const RegisterCard =()=>{
    const user ={
        name: "",
        email :"",
        mobile :""
    }

    const handleNameInput = (e)=>{
        user.name = e.target.value
    }
    const handleEmailInput =(e)=>{
        user.email = e.target.value
    }
    const handleMobileInput =(e) =>{
        user.mobile = e.target.value
    }
    const handleSubmit =async()=>{
        console.log(user)
        try {
            const response = await axios.post('http://localhost:4000/email',{user})
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }

    return <div className="register-card-container">
        <div className="row" style={{font:"5vh poppins",color:"white",textAlign:"center"}}>
            <p style={{marginBottom:"0%",padding:"2% 10%"}}>Register your interest</p> 
        </div>
        <div className="row" style={{padding:"2% 5%"}}>
            <div className="col-8" >
                <input className="input" type="text" placeholder="Enter your name*" onChange={handleNameInput}/>
                <input className="input" type="text" placeholder="Enter your Email*" onChange={handleEmailInput} />
                <input className="input" type="text" placeholder="Enter your Mobile No.*" onChange={handleMobileInput} />
            </div>
            <div className="col-4" style={{alignSelf:"center"}}>
                <Button variant="dark" onClick={handleSubmit} style={{border:"2px solid white",padding:"3% 30% 3% 30%"}}>Submit</Button>
            </div>
        </div>
    </div>
}

export default RegisterCard