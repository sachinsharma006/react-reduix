const initialState = 10;
const mathOperations = (state = initialState, action) => {
  switch (action.type) {
    case "SQRT":
      return Math.sqrt(state);
    case "LOG":
      return Math.log10(state);
    default:
      return state;
  }
};

export default mathOperations;