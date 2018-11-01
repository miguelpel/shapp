import { ADD_DATA } from "../constants/action-types";

const initialState = {
  cardsData: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA:
      console.log(action.data);

      return state.cardsData.push(action.data);
    //  { ...state, cardsData: state.cardsData.concat(action.data) };

    default:
      return state;
  }
};

export default rootReducer;
