import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE, UPDATE_MESSAGE } from "../actionTypes";

export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
});

export const fetchMessages = () => {
  return dispatch => {
    // Diese API Call funktioniert nur, wenn man eingeloggt ist
    return apiCall("get", "/api/messages")
    .then(res => {
      dispatch(loadMessages(res));
    })
    .catch(err => { 
      dispatch(addError(err.message));
    });
  };
};
