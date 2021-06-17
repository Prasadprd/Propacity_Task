import React from "react";
import zeroLoan from "../../assets/ZERO LOAN.svg";
import OfferCard from "../Offers Card/offer-card";

import "./offers.css";

const Offers = () => {
  const offers = [
    {
      type: "CLASSIC",
      feature_1: "5 LACS EOI AMOUNT",
      feature_2: "X LACS BENEFIT",
    },
    {
      type: "EXECUTIVE",
      feature_1: "15 LACS EOI AMOUNT",
      feature_2: "3X LACS BENEFIT",
    },
  ];

  return (
    <div
      className="container-fluid offers-container"
      style={{
        background: "#F3F3F3",
        padding: "2%",
      }}
    >
      <div className="zero-loan-logo row ">
        <img className="zero-loan-image d-none d-md-inline" src={zeroLoan} alt="Zero loan offer" />
        <img className="d-inline d-md-none" src={zeroLoan} alt="Zero loan offer" style={{maxWidth:"50vh",maxHeight:"10vh",margin:"2%"}}/>
        <p
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "fit-content"
          }}
        >
          0% INTEREST ON HOME LOAN UPTIL MARCH 2022
        </p>
      </div>
      <div className="row" style={{ marginTop: "5%" }}>
        <div className="col-12 col-md-6">
          <div
            style={{
              maxWidth: "fit-content",
              marginRight: "auto",
              marginLeft: "auto",
            }}
          >
            <div className="row">
              <p
                style={{
                  font: "4vh JelesW01-Regular",
                  letterSpacing: "0.16px",
                  color: "#2C2E40",
                }}
              >
                Exciting EOI Offers <br /> To Choose From
              </p>{" "}
            </div>
            <div className="row">
              <p className="d-none d-md-inline"
                style={{
                  font: "3vh JelesW01-Regular",
                  letterSpacing: "0.16px",
                  color: "#2C2E40",
                }}
              >
                Pre-Book with Executive EOI & get <br /> an additional 3-year
                EQUUS club <br /> membership at St. Regis Mumbai.
              </p>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="row" >
           
              {offers.map((offer) => {
                return (
                  <OfferCard
                    type={offer.type}
                    feature_1={offer.feature_1}
                    feature_2={offer.feature_2}
                  />
                );
              })}
            
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
