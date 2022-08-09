import React, { useReducer } from "react";
import Card from "./Card.components.jsx";
import star from "../images/icon-star.svg";
import { useNavigate } from "react-router-dom";
import ratingReducer, {
  STAR_INITIAL_STATE,
} from "../reducers/rating.reducer.js";
import "./rating.styles.css";
import {
  updateFiveStarsState,
  updateFourStarsState,
  updateOneStarState,
  updateThreeStarsState,
  updateTwoStarState,
} from "../reducers/rating.actions.js";

const Rating = () => {
  const navigate = useNavigate();
  const [activeButtonState, dispatchActivebuttonState] = useReducer(
    ratingReducer,
    STAR_INITIAL_STATE
  );

  const updateStarOne = () => {
    dispatchActivebuttonState(updateOneStarState(true, 1));
  };

  const updateStarTwo = () => {
    dispatchActivebuttonState(updateTwoStarState(true, 2));
  };
  const updateStar3 = () => {
    dispatchActivebuttonState(updateThreeStarsState(true, 3));
  };
  const updateStar4 = () => {
    dispatchActivebuttonState(updateFourStarsState(true, 4));
  };
  const updateStar5 = () => {
    dispatchActivebuttonState(updateFiveStarsState(true, 5));
  };

  const transferData = () => {
    if (activeButtonState.ratingScore === 0) {
      alert("You must rate to submit the form");
    } else {
      navigate("/submit", {
        state: { score: activeButtonState.rating.ratingScore },
      });
    }
  };

  return (
    <Card>
      <div className="img-container">
        <img src={star} alt="" />
      </div>
      <div className="text-container">
        <h1 className="title">How did we do?</h1>
        <p className="rating-text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="rating-container">
        <div
          onClick={() => updateStarOne()}
          className={
            activeButtonState.values.oneStar ? "circle-active" : "circle"
          }
        >
          1
        </div>
        <div
          onClick={() => updateStarTwo()}
          className={
            activeButtonState.values.twoStars ? "circle-active" : "circle"
          }
        >
          2
        </div>
        <div
          onClick={() => updateStar3()}
          className={
            activeButtonState.values.threeStars ? "circle-active" : "circle"
          }
        >
          3
        </div>
        <div
          onClick={() => updateStar4()}
          className={
            activeButtonState.values.fourStars ? "circle-active" : "circle"
          }
        >
          4
        </div>
        <div
          onClick={() => updateStar5()}
          className={
            activeButtonState.values.fiveStars ? "circle-active" : "circle"
          }
        >
          5
        </div>
      </div>
      <button
        onClick={() => {
          transferData();
        }}
        className="submit"
      >
        submit
      </button>
    </Card>
  );
};

export default Rating;
