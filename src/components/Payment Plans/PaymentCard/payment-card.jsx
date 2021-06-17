import React from "react"

import "./payment-card.css"

const PaymentCard =( props) =>{
    return (
        <div className="card-container" >
            <div className="row">
                <p style={{font: "3vh Poppins",color: "#2A3647"}}>{props.type}</p>
                <p style={{font: "normal normal 600 2vh Poppins",color: "#2A3647"}}>{props.price}</p>
                <img className="d-none d-md-inline" src={props.image} alt="" style={{maxWidth:"50vw" , maxHeight:"50vh",borderRadius:"20px" ,width:"100%"}} />
                <p className="price-container d-none" style={{marginBottom:"0%"}}>Request price breakup</p>
            </div>
            
            
        </div>
    )
}

export default PaymentCard;