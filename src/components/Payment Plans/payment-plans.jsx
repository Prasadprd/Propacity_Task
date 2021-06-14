import React from "react";
import image from "../../assets/image/image.png"
import room from "../../assets/room.jfif"
import PaymentCard from "./PaymentCard/payment-card";
import "./payment-plans.css"

const PaymentPlans =()=>{
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
    const floorPlans =[
        {
            type : "2 BHK",
            area : "Size: 735-1061 sq.ft",
            pic : room
        },
        {
            type : "2 BHK",
            area : "Size: 735-1061 sq.ft",
            pic : room

        },
        {
            type : "2 BHK",
            area : "Size: 735-1061 sq.ft",
            pic : room
        }
    ]
    return (
        <div className="container-fluid">
            <div className="row">
                <p className = "plans-header">Payment Plans</p>
            </div>
            <div className="row" style={{margin:" 3% 10%"}}>
                {paymentPlans.map(plan =>{
                    return (
                        <div className="col-sm-4">
                            < PaymentCard type={plan.type} price={plan.price} image={plan.pic} />
                        </div>
                    )
                })}
               
                
            </div>
            <div className="row">
                <p className="plans-header">Floor Plans</p>
            </div>
            <div className="row" style={{margin:" 3% 10%"}}>
                {
                    floorPlans.map(plan =>{
                        return (
                            <div className="col-sm-4" >
                                < PaymentCard type={plan.type} price={plan.area} image={plan.pic} />
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default PaymentPlans ;