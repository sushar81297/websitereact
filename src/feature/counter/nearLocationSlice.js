import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { searchPlace } from "../../Api";
import axios from "axios";

export const fetchNearLocation = createAsyncThunk(
  "nearLocation/fetchNearLocation",
  async ({ lat, long, distance }) => {
    const latlong = {
      coordinates: [long, lat],
      distance_mile: 0.5,
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

const nearLocationSlice = createSlice({
  name: "nearLocation",
  initialState: {
    data: [],
    status: "ilde",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNearLocation.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchNearLocation.fulfilled, (state, action) => {
        state.status = "successed";
        state.data = [...action.payload.data];
      })
      .addCase(fetchNearLocation.rejected, (state, action) => {
        state.status = "failed";
        state.data = action.error.message;
      });
  },
});

export default nearLocationSlice.reducer;
