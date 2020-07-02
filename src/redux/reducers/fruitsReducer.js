import { ADD_FRUIT } from "../actions/fruitsActions";

const initialState = ["Fresa", "Manzana"];

function fruits(state = initialState, action) {
  switch (action.type) {
    case ADD_FRUIT:
      return [action.payload.fruit, ...state];
    default:
      return state;
  }
}

export default fruits;
