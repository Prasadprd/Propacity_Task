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
        background: "#F3F3F3 0% 0% no-repeat padding-box",
        padding: "2%",
      }}
    >
      <div className="row zero-loan-logo">
        <img className="zero-loan-image" src={zeroLoan} alt="Zero loan offer" />
        <p
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            maxWidth: "fit-content",
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
              <p
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
          <div className="row">
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
