import { Card } from "react-bootstrap";
import "./feature-icon.css"

const FeaturesIcon =(props)=>{
    const {icon ,name,details} = props
    return (
        <Card style={{ width: '9rem',marginRight:"0%",backgroundColor:"none",border:"none"}}>
            <Card.Img variant="top" src={icon} style={{maxHeight:"5vh",height:"100%"}}/>
            <Card.Body style={{padding :"0%",paddingTop:"5%"}}>
                <p style={{font: "normal normal normal 2.5vh Poppins",color: "#2C2E40",textAlign:"center",margin:"0%"}}>{name}</p>
                <p style={{font: "normal normal normal 2vh Poppins",color: "#2C2E40",textAlign:"center"}}>{details}</p>
                
            </Card.Body>
        </Card>
    )
}

export default FeaturesIcon;