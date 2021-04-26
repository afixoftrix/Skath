import { createSlice } from "@reduxjs/toolkit";

// Manages step count. Makes it available for other parts of the app to use if needed.

const initialState = {
  steps: 0,
};

const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    updateSteps: (state, { payload }) => {
      state.steps = payload;
    },
    resetSteps: (state) => {
      state.steps = 0;
    },
  },
});

export const { updateSteps, resetSteps } = stepsSlice.actions;
export default stepsSlice.reducer;
