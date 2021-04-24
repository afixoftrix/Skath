import { combineReducers, configureStore } from "@reduxjs/toolkit";
import trackOptions from './trackOptions';
import location from './location';
import records from './records';
import weather from './weather';
import steps from './steps';


const rootReducer = combineReducers({ trackOptions, weather, steps, location, records });

export default configureStore({
  reducer: rootReducer,
});
