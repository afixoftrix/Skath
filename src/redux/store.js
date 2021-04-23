import { combineReducers, configureStore } from "@reduxjs/toolkit";
import trackOptionsSlice from './trackOptions';

const rootReducer = combineReducers({ trackOptions: trackOptionsSlice });

export default configureStore({
  reducer: rootReducer,
});
