import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { searchPlace } from "../../Api";

export const fetchLocation = createAsyncThunk(
  "location/fetchLocation",
  async ({ long, lat }) => {
    const latlong = {
      coordinates: [long, lat],
      distance_mile: 1,
    };
    try {
      const response = await axios.post(searchPlace, latlong);
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState: {
    data: [],
    currentZoom: 12,
    currentLat: null,
    currentLong: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setZoom: (state, action) => {
      state.currentZoom = action.payload;
    },
    setCurrentLat: (state, action) => {
      state.currentLat = action.payload;
    },
    setCurrentLong: (state, action) => {
      state.currentLong = action.payload;
    },
    resetLocation: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchLocation.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchLocation.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = [...action.payload.data];
      })
      .addCase(fetchLocation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { setZoom, setCurrentLat, setCurrentLong, resetLocation } =
  locationSlice.actions;

export default locationSlice.reducer;
