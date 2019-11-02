import {LOAD_MESSAGES, REMOVE_MESSAGES} from "../actionTypes";

const message = (state = [], action) => {
    switch(action.type){
        case LOAD_MESSAGES:
            // Gibt eine Kopie von allen Messages zurück
            return [...action.messages];
            default:
                return state;
    }
}

export default message;