import { apiCall } from "../../services/api";
import { SET_CURRENT_USER } from "../actionTypes";

export function setCurrentUser(user) {
  // Das wird an Reducer gesendet
  return {
    type: SET_CURRENT_USER,
    user
  };
}

// Type ist entweder "signup" oder "signin"
// userData kommen vom Request rein
export function authUser(type, userData) {
  return dispatch => {
    // Man muss noch warten bis der Api-Call fertig ist,
    // bevor man die acion dispatched -> Deswegen wird ein neues Promise returned
    return new Promise((resolve, reject) => {
      return apiCall("post", `/api/auth/${type}`, userData)
        .then(({ token, ...user }) => {
          // Von meiner API kommt ein User-Objekt zurück mit token, username etc.
          localStorage.setItem("jwtToken", token);
          // Hier wird der User im Redux-Store erstellt
          // damit das Front-End etwas mit den Daten anfangen kann
          dispatch(setCurrentUser(user));
          resolve();
        });
    });
  };
}
