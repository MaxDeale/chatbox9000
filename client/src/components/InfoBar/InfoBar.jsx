import React from "react";
import "./infobar.css";
import closeIcon from "../../icons/close.png";
import onlineIcon from "../../icons/online.png";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <img
        src={onlineIcon}
        alt="no"
        className="onlineIcon"
        style={{ width: "20px", height: "20px", borderRadius: "50%" }}
      />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        {" "}
        <img
          src={closeIcon}
          alt="no"
          style={{ width: "20px", height: "20px", borderRadius: "50%" }}
        />{" "}
      </a>
    </div>
  </div>
);

export default InfoBar;
