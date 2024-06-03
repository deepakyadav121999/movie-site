import { ActionTypes } from "../constants/action-types";
const initialState ={
    movies: []
}
export const playReducer =(state = initialState, action)=>{
    const {type, payload} = action 
    switch(type){
      case  ActionTypes.SET_PLAYLIST :
        return {...state, movies:payload}

        default:
            return state;

    }

}