const initialState = {
  temp: 25,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        temp: state.temp + action.payload,
      };
    case "DECREMENT":
      return {
        ...state,
        temp: state.temp - action.payload,
      };
    default:
      return state;
  }
};
