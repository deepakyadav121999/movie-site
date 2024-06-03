import { configureStore } from "@reduxjs/toolkit";
import InputSlice from "./Slice/InputSlice";
import { userReducer } from "./reducer/userReducer";
import {playReducer} from "./reducer/playReducer"
const Store = configureStore({
    reducer:{
        input:InputSlice,
        user: userReducer,
        movies: playReducer,
    }
})

export default Store;