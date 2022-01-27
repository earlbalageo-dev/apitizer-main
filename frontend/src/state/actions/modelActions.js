import { NEW_MODEL, NEW_MODEL_FAIL } from "../constants/modelConstants";
import axios from "axios";

export const newModel = (name) => async (dispatch) => {
  try {
    dispatch({
      type: NEW_MODEL,
      payload: name,
    });
  } catch (error) {
    dispatch({
      type: NEW_MODEL_FAIL,
      payload: error,
    });
  }
};
