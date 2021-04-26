import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import APIs from "./APIs";


// weather data management.
// The data is hardcoded for safety reasons.

const initialState = {
  loading: true,
  error: false,
  data: {
    coord: { lon: -0.1257, lat: 51.5085 },
    weather: [
      {
        id: 803,
        main: "Clouds",
        description: "broken clouds",
        icon: "04d",
      },
    ],
    base: "stations",
    main: {
      temp: 65.5,
      feelslike: 284.56,
      tempmin: 284.82,
      temp_max: 287.04,
      pressure: 1028,
      humidity: 50,
    },
    visibility: 10000,
    wind: { speed: 7.2, deg: 80 },
    clouds: { all: 75 },
    dt: 1619362707,
    sys: {
      type: 1,
      id: 1414,
      country: "GB",
      sunrise: 1619325815,
      sunset: 1619377979,
    },
    timezone: 3600,
    id: 2643743,
    name: "London",
    cod: 200,
  },
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
