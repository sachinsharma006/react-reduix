const initialState = 0;
const UpdateNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "MULTIPLY":
      return state * state;
    case "HALF":
      return state / 2;

    case "RESET":
      return state * 0;
    default:
      return state;
  }
};

export default UpdateNumber;