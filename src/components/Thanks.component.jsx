import React from "react";
import Card from "./Card.components";
import "./thanks.styles.css";
import image from "../images/illustration-thank-you.svg";
import { useLocation } from "react-router-dom";
const Thanks = () => {
  const location = useLocation();

  return (
    <Card>
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <p className="text-box">You selected {location.state.score} of 5 ⭑ </p>
      <h2 className="title-2">Thank you !</h2>
      <p className="thanks-text">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </Card>
  );
};

export default Thanks;
