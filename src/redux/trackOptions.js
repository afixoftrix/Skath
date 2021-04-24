import { createSlice } from '@reduxjs/toolkit'
import { pull } from 'lodash';

/**
 *  Reducers that manage the tracking options
 *  tracks manages what gets tracked
 *  interval manages how often the tracks are recorded
 */
const initialState = {
  tracks: [],
  interval: 5000
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
    changeInterval: (state, option) => {
      //Type here needs to be number or some devasting problems could occur.
      // In hindsight, maybe typescript is a smarter choice for apps like this.
      // You don't want to call the APIs too often, they are tasking and some have limits.
      if ( typeof option.payload === "number" && option.payload > 5000 ){
        state.interval = option.payload;
      } else { state.interval = 10000; }
    },
  },
});

export const { addOption, removeOption, changeInterval } = trackOptionsSlice.actions;
export default trackOptionsSlice.reducer;
