import { Card } from "react-bootstrap";
import "./feature-icon.css"

const FeaturesIcon =(props)=>{
    const {icon ,name,details} = props
    return (
        <div className="row">
            <div className="row" style={{width:"fit-content",marginLeft:"auto",marginRight:"auto"}} >
                <img src={icon} alt="" className="feature-icon" style={{width:"fit-content",padding:"5%",margin:"5%"}}/>
            </div>
            
            <p style={{font: "2.5vh Poppins",color: "#2C2E40",textAlign:"center"}}>{name}</p>
            <p style={{textAlign:"center",font:"2vh Poppins",color: "#2C2E4"}}>{details}</p>
        </div>
    )
}

export default FeaturesIcon;