import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  sessionRecord: {
    date: '',
    data: [],
  },
  records: [],
};

const recordsSlice = createSlice({
  name: "records",
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.sessionRecord.data.push(payload);
    },
    postToRecords: (state, {payload}) => {
      state.records.push(state.sessionRecord);
      state.sessionRecord = initialState.sessionRecord;
    },
    finishRecording: (state, {payload}) => {
      state.sessionRecord.date = payload
    },
  },
});

export const { addData, postToRecords, finishRecording } = recordsSlice.actions;
export default recordsSlice.reducer;
