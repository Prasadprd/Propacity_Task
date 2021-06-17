import React from "react";
import image from "../../assets/image/image.png"
import room from "../../assets/room.jfif"
import PaymentCard from "./PaymentCard/payment-card";
import "./payment-plans.css"
import { Button } from "react-bootstrap";

const PaymentPlans =()=>{
    const paymentPlans =[
        {
            key:"1",
            type :"2 BHK",
            price :"3.4 Cr* Onwards",
            pic : room
        },
        {
            key:"2",
            type :"3 BHK",
            price :"5.4 Cr* Onwards",
            pic : room
        },
        {
            key:"3",
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
            type : "3 BHK",
            area : "Size: 735-1061 sq.ft",
            pic : room

        },
        {
            type : "4 BHK",
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
                        <div className="col-sm-4" key={plan.key}>
                            < PaymentCard type={plan.type} price={plan.price} image={plan.pic} style={{margin:"5vh"}} />
                        </div>
                    )
                })}
               
                
            </div>
            <div className="row">
                <p className="plans-header">Floor Plans</p>
            </div>
            <div className="row d-inline d-md-none">
            {
                    floorPlans.map(plan =>{
                        return (
                            <div className="col-4" style={{width:"fit-content"}}>
                                <Button variant="dark" style={{backgroundColor:"#BA8C5F"}}>{plan.type}</Button>
                            </div>
                            
                        )
                    })
                }
            </div>
            <div className="row d-none d-md-inline" style={{margin:" 3% 10%"}}>
                {
                    floorPlans.map(plan =>{
                        return (
                            <div className="col-12 col-md-4" key={plan.type} >
                                < PaymentCard type={plan.type} price={plan.area} image={plan.pic} style={{margin:"5%"}} />
                                
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )

}

export default PaymentPlans ;