import types from "./types";

const initialState = {
  bread: false,
  meat: false,
  cheese: false,
  salad: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.ADD_BREAD:
      return {
        ...state,
        bread: true,
      };
    case types.REMOVE_BREAD:
      return {
        ...state,
        bread: false,
      };
    case types.ADD_MEAT:
      return {
        ...state,
        meat: true,
      };
    case types.REMOVE_MEAT:
      return {
        ...state,
        meat: false,
      };
    case types.ADD_CHEESE:
      return {
        ...state,
        cheese: true,
      };
    case types.REMOVE_CHEESE:
      return {
        ...state,
        cheese: false,
      };

    case types.ADD_SALAD:
      return {
        ...state,
        salad: true,
      };
    case types.REMOVE_SALAD:
      return {
        ...state,
        salad: false,
      };

    default:
      return state;
  }
}
