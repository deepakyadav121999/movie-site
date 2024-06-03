import {ActionTypes } from "../constants/action-types";
export const setplaylist =(movies)=>(
    {
        type: ActionTypes.SET_PLAYLIST,
        payload: movies
    }
)