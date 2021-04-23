import { createSlice } from '@reduxjs/toolkit'
import { pull } from 'lodash';

const initialState = {
  tracks: []
}

const trackOptionsSlice = createSlice({
  name: "trackOptions",
  initialState,
  reducers: {
    addOption: (state, option) => {
      state.tracks.push(option.payload);
    },
    removeOption: (state, option) => {
      pull(state.tracks, option.payload);
    },
  },
});

export const { addOption, removeOption } = trackOptionsSlice.actions;
export default trackOptionsSlice.reducer;
