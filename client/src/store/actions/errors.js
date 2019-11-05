import { ADD_ERROR, REMOVE_ERROR } from "../actionTypes"

// Zwei kleine Action-Creators (Funktionen die actions zurückgeben.)

export const addError = error => ({
    type: ADD_ERROR,
    error
})
export const removeError = () => ({
    type: REMOVE_ERROR,
})

