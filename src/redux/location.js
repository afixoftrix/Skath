import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: '',
  place: ''
};

const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    updateLocation: (state, { payload }) => {
      state = {...payload};
    },
    resetLocation: (state) => {
      state = initialState;
    },
  },
});

export const { updateLocation, resetLocation } = locationSlice.actions;
export default locationSlice.reducer;
