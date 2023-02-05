import React from "react";
import "./head.css";
import Lottie from "react-lottie";

import Machine from "../assets/machine.png";
import animationData from "../lotties/mosquit.json";
const Head = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          marginTop: "150px",
        }}
        className="bodyPart"
      >
        <div style={{ width: "50%", margin: "auto", textAlign: "center" }}>
          <h1 className="title">Digitomy, LLC </h1>
          {animationData && (
            <div style={{ width: "20%", position: "absolute", top: 150 }}>
              <Lottie options={{ animationData }} eventListeners={[]} />
            </div>
          )}
          <h3 className="info">
            Digitomy is a USF based start-up geared towards automated
            surveillance
            <br />
            of mosquito vectors at both the adult and larval stages. Our
            patented
            <br />
            algorithms and patent pending smart mosquito trap will revolutionize
            <br />
            surveillance of vector mosquitoes via automation.
          </h3>
        </div>

        <div
          className="about__me"
          style={{ margin: "auto", padding: "auto", marginTop: 50 }}
        >
          <div className="about__me-image">
            <img src={Machine} alt="" className="pfpi fadeIn" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Head;
