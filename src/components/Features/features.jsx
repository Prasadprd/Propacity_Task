import React,{useState} from "react";
import accomodation from "../../assets/accomodation.svg";
import cardinal from "../../assets/cardinal-points.svg";
import group from "../../assets/Group 125.svg";
import navigation from "../../assets/navigation.svg";
import urbanProperty from "../../assets/urban-property.svg";
import FeaturesIcon from "../Features Icon/features-icon";
import { IoIosArrowForward } from "react-icons/io";
import "./features.css";
import { Button } from "react-bootstrap";
import EnquireModal from "../Modal/enquire-modal";

const Features = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    return setShow(false);
  };

  const handleShow = () => setShow(true);

  const featuresArray = [
    {
      icon: accomodation,
      name: "Configuration",
      details: "2,3 & 4 BHK",
    },
    {
      icon: urbanProperty,
      name: "Possesion",
      details: "Ready to move in",
    },
    {
      icon: group,
      name: "Pricing",
      details: "3.69Cr",
    },

    {
      icon: cardinal,
      name: "Vastu Shastra",
      details: "Vastu complaint",
    },
    {
      icon: navigation,
      name: "Location",
      details: "Rani Baug,Biculla",
    },
  ];
  return (
    <div className="features-container">
      <div className="row" style={{ padding: "5% 3%", margin: "2%" }}>
        <p
          className="name"
          style={{
            backgroundColor: "#ffd9b3",
            marginBottom: "1%",
            maxWidth: "fit-content",
          }}
        >
          PIRAMAL ARANYA
        </p>
        <p className="no-wrap name">Ultra-Luxurious PROJECT</p>
      </div>

      <div className="row">
        <div
          className="row"
          style={{ padding: "2%", margin: "2%", justifyContent: "center" }}
        >
          {featuresArray.map((icon) => {
            return (
              <div className="col-6 col-lg-4" key={icon.name}>
                <FeaturesIcon
                  icon={icon.icon}
                  name={icon.name}
                  details={icon.details}
                  style={{ backgroundColor: "transperent" }}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div
        className="row"
        style={{
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Button variant="dark" className="" onClick={handleShow} >
          Enquire Now <IoIosArrowForward />{" "}
        </Button>
        < EnquireModal show={show} handleClose={handleClose}/>
        
      </div>
    </div>
  );
};

export default Features;
