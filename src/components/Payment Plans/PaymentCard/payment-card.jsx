import React from "react"
import { Button } from "react-bootstrap"

import "./payment-card.css"

const PaymentCard =( props) =>{
    return (
        <div className="card-container" >
            <div className="row d-none d-md-inline">
                <p style={{font: "3vh Poppins",color: "#2A3647"}}>{props.type}</p>
                <p style={{font: "600 2vh Poppins",color: "#2A3647"}}>{props.price}</p>
                <img className="d-none d-md-inline" src={props.image} alt="" style={{maxWidth:"50vw" , maxHeight:"50vh",borderRadius:"20px" ,width:"100%"}} />
                <p className="price-container d-none" style={{marginBottom:"0%"}}>Request price breakup</p>
            </div>
            <div className="row d-flex-horizontal d-md-none" >
                <div className="col-2">{props.type}</div>
                <div className="col-4">{props.price}</div>
                <div className="col-6">
                    
                    <Button variant="dark">Price breakup</Button>
                </div>
            </div>
            
            
        </div>
    )
}

export default PaymentCard;