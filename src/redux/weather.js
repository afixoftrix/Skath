import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import APIs from "./APIs";

const initialState = {
  loading: true,
  error: false,
  data: {}
};

//Thunk that handles the async calling of the weather api
export const getWeather = createAsyncThunk(
  "weather/get",
  async ({lat, long}) => {
    const response = await axios.request(APIs.weather(lat, long));
    return response.data;
  }
);

const getWeatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: {
    [getWeather.pending]: (state) => {
      state.loading = true;
    },
    [getWeather.fulfilled]: (state, { payload }) => {
      state.data = {...payload};
      state.loading = false;
    },
    [getWeather.rejected]: (state) => {
      state.error = true;
      state.loading= false;
    }
  },
});

export default getWeatherSlice.reducer;
