import React, { useState } from "react";
import logo from "../../assets/logo.svg";
import call from "../../assets/Icon zocial-call.svg";
import { Button, Modal } from "react-bootstrap";
import "./header.css";
import EnquireModal from "../Modal/enquire-modal";
import { VscThreeBars } from "react-icons/vsc";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    return setShow(false);
  };

  const handleShow = () => setShow(true);

  const links = [
    "Home",
    "Resedenties",
    "Ameneties",
    "Payment plans",
    "Floor plans",
  ];
  return (
    <div
      className="container-fluid"
      style={{ backgroundColor: "FFFFFF", boxShadow: "0px 5px 8px #00000040" }}
    >
      <div className="row align-items-center">
        <div
          className="col-2 d-md-none"
          style={{ padding: "2% 0%", margin: "2% 0%", textAlignLast: "center" }}
        >
          <VscThreeBars />
        </div>
        <div className="col-8 col-md-2">
          <img
            className="d-none d-md-inline"
            src={logo}
            alt="logo"
            style={{
              padding: "2%",
              margin: "2%",
              height: "fit-content",
              width: "15vw",
            }}
          />
          <img
            className="d-inline d-md-none"
            src={logo}
            alt="logo"
            style={{
              padding: "2%",
              margin: "2%",
              height: "5vh",
              width: "45vw",
            }}
          />
        </div>
        <div className="d-none d-md-inline-block col-md-6">
          <div
            className="row"
            style={{ verticalAlign: "middle", height: "100%" }}
          >
            {links.map((link) => {
              return (
                <div
                  className="col contact-info"
                  key={link}
                  style={{
                    font: "Poppins",
                    color: "#1A3845",
                    fontSize: "2.5vh",
                    textAlign: "center",
                    
                  }}
                >
                  {" "}
                  <p>{link}</p>{" "}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-2 col-md-3" style={{ textAlignLast: "center" }}>
          <div className="row" style={{ height: "100%" }}>
            <div
              className="col contact-info"
              style={{
                font: "2.5vh poppins",
                color: "#BA8C5F",
                fontWeight: "bolder",
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <img src={call} alt="contact" />
              <p className="d-none d-md-inline" style={{ marginBottom: "0%" }}>
                +918999874382
              </p>
            </div>
            <div className="col contact-info">
              <Button
                variant="dark"
                className="d-none d-md-inline"
                style={{
                  boxShadow: "3px 3px 10px #00000029",
                  border: "1px solid #2C2E40",
                  font: "poppins",
                  borderRadius: "10px",
                }}
                onClick={handleShow}
              >
                Enquire Now
              </Button>
            </div>
            <EnquireModal show={show} handleClose={handleClose} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
