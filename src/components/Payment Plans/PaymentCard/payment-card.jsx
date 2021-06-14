import React from "react"

import "./payment-card.css"

const PaymentCard =( props) =>{
    return (
        <div className="card-container" >
            <p style={{font: "3vh Poppins",color: "#2A3647"}}>{props.type}</p>
            <p style={{font: "normal normal 600 4vh Poppins",color: "#2A3647"}}>{props.price}</p>
            <img src={props.image} alt="" style={{maxWidth:"50vw" , maxHeight:"50vh",borderRadius:"20px" ,width:"100%"}} />
            <p className="price-container" style={{marginBottom:"0%"}}>Request price breakup</p>
            
        </div>
    )
}

export default PaymentCard;