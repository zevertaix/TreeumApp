import { combineReducers } from "@reduxjs/toolkit";
import { albumsSlice } from "./reducers/albumsSlice";

const rootReducer = combineReducers({
  albums: albumsSlice.reducer,
});

export default rootReducer;
