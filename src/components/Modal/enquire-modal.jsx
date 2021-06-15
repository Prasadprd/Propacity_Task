import React from "react"
import {Modal,Row,Form,Col,Button} from "react-bootstrap"
import city from "../../assets/city.jfif"

import "./enquire-modal.css"

const EnquireModal =(props)=>{
    return (
        <>
          <Modal show={props.show} onHide={props.handleClose} animation={false}>
            
            
            <div className="row modal-container" >
                <div className="col-4" style={{padding:"0%",margin:"0%"}}> 
                    <img src={city} alt="city" style={{width:"100%",height:"100%",borderRadius:".5vw"}}/>
                </div>
                <div className="col-8 field-container">
                    <div className="row" style={{font:"4vh Poppins",color:"#F3F3F3",padding:"2% 5%",margin:"2% 5%",textAlign:"center"}}> 
                        <p style={{marginBottom:"0%"}}>Enquire Now</p>
                    </div>
                    <div className="row" style={{padding:"5% 5%"}}>
                        <input className="input-field" type="text" placeholder="Enter your name" style={{padding:"2% 5%",margin:"2%"}} />
                        <input className="input-field" type="text" placeholder="Enter your mobile no." style={{padding:"2% 5%",margin:"2%"}}/>
                        <input className="input-field" type="text" placeholder="Enter your email" style={{padding:"2% 5%",margin:"2%"}}/>
                    </div>
                    <div className="row" style={{width:"fit-contnent",justifyContent:"center"}}>
                        <Button style={{backgroundColor:"#BA8C5F",padding:"1% 15%", width:"fit-content",margin:"0% 2% 2% 2%"}} >Submit</Button>
                    </div>
                    
                </div>
            </div>
              <div
                style={{
                  borderBottom: "1px solid #a9a9a9",
                  borderRadius: "",
                  padding: "",
                }}
              >
               
    
              </div>
    
              {/* <div
                style={{
                  borderRadius: "5px",
                  padding: "5px",
                }}
              >
                <Form style={{}} onSubmit={console.log("submitted")}>
                  <Button variant="secondary" onClick={props.handleClose} style={{margin : "10px"}}>
                    Close
                  </Button>
                </Form>
              </div> */}
            
        </Modal>
    </>
    );
    
}

export default EnquireModal;