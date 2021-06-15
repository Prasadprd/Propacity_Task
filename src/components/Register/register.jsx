import React from "react"
import RegisterCard from "./Register Card/register-card"
import PaymentCard from "../Payment Plans/PaymentCard/payment-card"
import room from "../../assets/room.jfif"

import "./register.css"

const Register =()=>{
    const paymentPlans =[
        {
            type :"2 BHK",
            price :"3.4 Cr* Onwards",
            pic : room
        },
        {
            type :"3 BHK",
            price :"5.4 Cr* Onwards",
            pic : room
        },
        {
            type :"4 BHK",
            price :"7.9 Cr* Onwards",
            pic : room
        }
    ]
    return (
        <div className="container-fluid register-container">
            <div className="row" style ={{maxWidth:"50vw",maxHeight:"50vh",padding:"2% 5%",margin:"2% 5%"}}>< RegisterCard /></div>
            <div className="row" style={{textAlign:"center", padding:"2% 6% 3% 6%",margin:"2% 6% 2% 6%"}}>
                <p style ={{font: "5vh JelesW01-Regular",letterspacing: "0.24px",color: "#F3F3F3"}}>Piramal Realty </p>
                <p style={{font:"2.5vh Poppins",letterSpacing: "0.12px",color: "#F3F3F3"}}>
                    Piramal Realty, the real estate arm of Piramal Group, is counted amongst the most coveted developers of India. Driven by their values of delivering luxurious homes equipped with modern amenities, Piramal Realty is developing 17 mn. sq. ft of residential and commercial projects across Mumbai. They have not only been bestowed with various accolades for their superior architectural design and innovative solutions but have also received $434 mn private equity investment from well-known investors like Goldman Sachs.
                </p>
            </div>
            <div className="row" style={{padding:"2% 5%",margin:"2% 5%"}}>
                {
                    paymentPlans.map(plan=>{
                        return (
                            <div className="col-4">
                                <PaymentCard type={plan.type} price={plan.price} image={plan.pic} />
                            </div>
                        )
                        
                    })
                }
            </div>
            
            
        </div>
    )
}

export default Register;