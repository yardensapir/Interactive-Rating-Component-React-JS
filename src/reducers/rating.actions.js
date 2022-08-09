const buttonActionTypes = {
  ONE_STARS: "ONE_STAR",
  TWO_STARS: "TWO_STARS",
  THREE_STARS: "THREE_STARS",
  FOUR_STARS: "FOUR_STARS",
  FIVE_STARS: "FIVE_STARS",
};

export const updateOneStarState = (value, rating) => {
  const action = {
    type: buttonActionTypes.ONE_STARS,
    payload: {
      value: value,
      rating: rating,
    },
  };
  return action;
};

export const updateTwoStarState = (value, rating) => {
  const action = {
    type: buttonActionTypes.TWO_STARS,
    payload: {
      value: value,
      rating: rating,
    },
  };
  return action;
};

export const updateThreeStarsState = (value, rating) => {
  const action = {
    type: buttonActionTypes.THREE_STARS,
    payload: {
      value: value,
      rating: rating,
    },
  };
  return action;
};

export const updateFourStarsState = (value, rating) => {
  const action = {
    type: buttonActionTypes.FOUR_STARS,
    payload: {
      value: value,
      rating: rating,
    },
  };
  return action;
};

export const updateFiveStarsState = (value, rating) => {
  const action = {
    type: buttonActionTypes.FIVE_STARS,
    payload: {
      value: value,
      rating: rating,
    },
  };
  return action;
};

export default buttonActionTypes;
