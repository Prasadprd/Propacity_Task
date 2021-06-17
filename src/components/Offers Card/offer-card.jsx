import React from "react";
import { BiRupee } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import mapLocation from "../../assets/Icon map-location-arrow.svg";
import { Button } from "react-bootstrap";

import "./offer-card.css";

const OfferCard = (props) => {
  const { type, feature_1, feature_2 } = props;
  return (
    <div
      className="col-6"
      style={{
        boxShadow: "0px 3px 6px #00000029",
        padding: "2%",
        backgroundColor: "white",
        borderRadius: "10px",
        marginRight: "10%",
        width: "fit-content",
      }}
    >
      <p
        className="col-6"
        style={{
          textAlign: "center",
          font: " bold 3vh Poppins",
          color: "#2A3647",
          marginTop: "10%",
        }}
      >
        {type}
      </p>
      <div className="col-12">
        <p className="offer-feature">
          <img src={mapLocation} alt="" style={{ width: "2vw" }} />
          <BiRupee />
          {feature_1}
        </p>
        <p className="offer-feature">
          <img src={mapLocation} alt="" style={{ width: "2vw" }} />
          <BiRupee />
          {feature_2}
        </p>
      </div>

      <div>
        <Button
          variant="dark"
          style={{
            padding: "3% 10% 3% 10%",
            marginTop: "5%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          Book Now <IoIosArrowForward />
        </Button>
      </div>
    </div>
    // <div className="row feature-card-container" >
    //     <div className="col-12 col-md-6" style={{maxWidth:"fit-content",marginLeft:"auto",marginRight:"auto"}}>{type}</div>
    //     <div className="col-12">
    //         <p><img src={mapLocation} alt="" style={{width:"2vw"}} /><BiRupee />{feature_1}</p>
    //         <p><img src={mapLocation} alt="" style={{width:"2vw"}} /><BiRupee />{feature_2}</p>
    //     </div>
    // </div>
  );
};

export default OfferCard;
