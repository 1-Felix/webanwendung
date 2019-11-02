import { apiCall } from "../../services/api";
import { addError } from "./errors";
import { LOAD_MESSAGES, REMOVE_MESSAGE, UPDATE_MESSAGE } from "../actionTypes";

// Action Creator
export const loadMessages = messages => ({
  type: LOAD_MESSAGES,
  messages
});

export const remove = id => ({
  type: REMOVE_MESSAGE,
  id
})

export const update = id => ({
  type: UPDATE_MESSAGE,
  id
})

export const removeMessage = (user_id, message_id) => {
  return dispatch => {
    return apiCall("delete", `/api/users/${user_id}/messages/${message_id}`)
    .then(() => dispatch(remove(message_id)))
    .catch(err => dispatch(addError(err.message)));
  }
}

export const updateMessage = (user_id, message_id, text) => {
  return dispatch => {
    return apiCall("put", `/api/users/${user_id}/messages/${message_id}`, {text})
    .then(res => dispatch(update(res)))
    .catch(err => dispatch(addError(err.message)));
  }
}

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

export const createNewMessage = text => (dispatch, getState) => {
  let { currentUser } = getState();
  const id = currentUser.user.id;
  return apiCall("post", `/api/users/${id}/messages`, { text })
    .then(res => {})
    .catch(err => dispatch(addError(err.message)));
};
