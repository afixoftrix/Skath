import { createSlice } from "@reduxjs/toolkit";
import moment from "moment";

/**
 * State/Data management for the tracking information
 */

const initialState = {
  ticks: 0,
  datum: {
    location: "",
    place: "",
    temp: "",
    weather: "",
    steps: "",
    timeStamp: "",
  },
  sessionRecord: {
    date: "",
    data: [],
  },
  records: [],
};

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    transferDatum: (state, { payload }) => {
      state.datum.timeStamp = moment().format();
      state.sessionRecord.data.push(state.datum);
    },
    incrementTick: (state) => {
      state.ticks++;
    },
    postToRecords: (state, { payload }) => {
      state.records.push(state.sessionRecord);
      state.sessionRecord = initialState.sessionRecord;
      state.ticks = 0;
    },
    finishRecording: (state, { payload }) => {
      state.sessionRecord.date = payload;
    },
    collectSteps: (state, { payload }) => {
      state.datum.steps = payload;
    },
    collectTemp: (state, { payload }) => {
      state.datum.temp = payload;
    },
    collectWeather: (state, { payload }) => {
      state.datum.weather = payload;
    },
    collectPlace: (state, { payload }) => {
      state.datum.place = payload;
    },
    collectLocation: (state, { payload }) => {
      state.datum.location = payload;
    },
  },
});

export const {
  transferDatum,
  incrementTick,
  postToRecords,
  finishRecording,
  collectPlace,
  collectSteps,
  collectTemp,
  collectWeather,
  collectLocation,
} = recordsSlice.actions;
export default recordsSlice.reducer;
