import buttonActionTypes from "./rating.actions";

export const STAR_INITIAL_STATE = {
  values: {
    oneStar: false,
    twoStars: false,
    threeStars: false,
    fourStars: false,
    fiveStars: false,
  },
  ratingScore: 0,
};

const ratingReducer = (state, action) => {
  switch (action.type) {
    case buttonActionTypes.ONE_STARS: {
      const starValue = action.payload.value;
      const updateRatingScore = action.payload.rating;

      const updateValues = {
        ...state.values,
        oneStar: starValue,
        twoStars: false,
        threeStars: false,
        fourStars: false,
        fiveStars: false,
      };

      const updateRating = {
        ...state.ratingScore, ratingScore: updateRatingScore,
      };

      const updateStates = {
        values: updateValues,
        rating: updateRating,
      };
   

      return updateStates;
    }

    case buttonActionTypes.TWO_STARS: {
      const starValue = action.payload.value;
      const updateRatingScore = action.payload.rating;

      const updateValues = {
        ...state.values,
        twoStars: starValue,
        oneStar: false,
        threeStars: false,
        fourStars: false,
        fiveStars: false,
      };
      const updateRating = {
        ...state.ratingScore,
        ratingScore: updateRatingScore,
      };

      const updateSates = {
        values: updateValues,
        rating: updateRating,
      };
      return updateSates;
    }

    case buttonActionTypes.THREE_STARS: {
      const starValue = action.payload.value;
      const updateRatingScore = action.payload.rating;

      const updateValues = {
        ...state.values,
        threeStars: starValue,
        oneStar: false,
        twoStars: false,
        fourStars: false,
        fiveStars: false,
      };
      const updateRating = {
        ...state.ratingScore,
        ratingScore: updateRatingScore,
      };

      const updateSates = {
        values: updateValues,
        rating: updateRating,
      };
      return updateSates;
    }

    case buttonActionTypes.FOUR_STARS: {
      const starValue = action.payload.value;
      const updateRatingScore = action.payload.rating;

      const updateValues = {
        ...state.values,
        fourStars: starValue,
        oneStar: false,
        threeStars: false,
        twoStars: false,
        fiveStars: false,
      };
      const updateRating = {
        ...state.ratingScore,
        ratingScore: updateRatingScore,
      };

      const updateSates = {
        values: updateValues,
        rating: updateRating,
      };
      return updateSates;
    }

    case buttonActionTypes.FIVE_STARS: {
      const starValue = action.payload.value;
      const updateRatingScore = action.payload.rating;

      const updateValues = {
        ...state.values,
        fiveStars: starValue,
        oneStar: false,
        threeStars: false,
        fourStars: false,
        twoStars: false,
      };
      const updateRating = {
        ...state.ratingScore,
        ratingScore: updateRatingScore,
      };

      const updateStates = {
        values: updateValues,
        rating: updateRating,
      };

      return updateStates;
    }
    default:{
      return state
    }
  }

};

export default ratingReducer;
