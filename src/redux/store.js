import { combineReducers, configureStore } from "@reduxjs/toolkit";
import trackOptions from './trackOptions';
import location from './location';
import records from './records';
import weather from './weather';
import steps from './steps';

/**
 * This is the core of the apps data management.
 * All states are combined here to create a state object that can be used throughout the app.
 */

const rootReducer = combineReducers({ trackOptions, weather, steps, location, records });

export default configureStore({
  reducer: rootReducer,
});
