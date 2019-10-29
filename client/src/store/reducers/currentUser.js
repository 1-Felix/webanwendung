import {
    SET_CURRENT_USER
} from "../actionTypes";

const DEFAULT_STATE = {
    isAuthenticated: false, // true, wenn der User eingeloggt ist
    user: {} // Enthält alle Infos, wenn eingeloggt
};

export default (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                // Wenn das User-Object nicht leer ist, also keys besitzt, muss er eingeloggt sein
                // "!!" stellt sicher das ein Boolean zurückgeben wird:
                // https://stackoverflow.com/questions/784929/what-is-the-not-not-operator-in-javascript
                isAuthenticated: !!Object.keys(action.user).length,
                    user: action.user
            }
            default:
                return state;
    }
}