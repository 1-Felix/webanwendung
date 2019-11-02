import {
  LOAD_MESSAGES,
  REMOVE_MESSAGE,
  UPDATE_MESSAGE
} from "../actionTypes";

const message = (state = [], action) => {
  switch (action.type) {
    case LOAD_MESSAGES:
      // Gibt eine Kopie von allen Messages zurück
      return [...action.messages];
    case REMOVE_MESSAGE:
      return state.filter(message => message._id != action.id)
    case UPDATE_MESSAGE:
        return [...action.messages]
    default:
      return state;
  }
};

export default message;
