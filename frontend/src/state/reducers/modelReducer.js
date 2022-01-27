import { NEW_MODEL, NEW_MODEL_FAIL } from "../constants/modelConstants";

export const modelReducer = (state = { models: [] }, action) => {
  switch (action.type) {
    case NEW_MODEL:
      return { models: [...state.models, action.payload] };
    case NEW_MODEL_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};
