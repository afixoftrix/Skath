import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  steps: 0,
};

const stepsSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    updateSteps: (state, { payload }) => {
      console.log('rdx payload: ', payload);
      state.steps = payload;
    },
    resetSteps: (state) => {
      state.steps = 0;
    },
  },
});

export const { updateSteps, resetSteps } = stepsSlice.actions;
export default stepsSlice.reducer;
