// Einfacher Reducer der dem User Fehlermeldungen anzeigt
import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes";

// Default Parameter ist keine Error-Message (message:null)
export default (
  state = {
    message: null
  },
  action
) => {
  switch (action.type) {
    case ADD_ERROR:
      // Der aktuelle State + die Error-Message werden zurückgegeben
      return {
        ...state,
        message: action.error
      };
    case REMOVE_ERROR:
      return {
        ...state,
        message: action.error
      };
    default:
      return state;
  }
};
