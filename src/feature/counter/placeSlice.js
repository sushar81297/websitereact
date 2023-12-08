import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { filterPlaceList, placeList } from "../../Api";

export const fetchPlace = createAsyncThunk(
  "places/fetchPlace",
  async (page) => {
    const response = await axios.get(`${placeList}?page=${page}&perpage=20`);
    return response.data.data;
  }
);
export const filterPlace = createAsyncThunk(
  "places/filterPlace",
  async ({ page, type, township }) => {
    const response = await axios.post(
      `${filterPlaceList}?page=${page}&perpage=20`,
      {
        type: type ? type - 1 : null,
        township: township ? township : null,
      }
    );

    return response.data.data;
  }
);
const placeSlice = createSlice({
  name: "places",
  initialState: {
    data: [],
    status: "idle",
    last_page: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlace.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPlace.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.last_page = action.payload.last_page;
      })
      .addCase(fetchPlace.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(filterPlace.pending, (state) => {
        state.status = "loading";
      })
      .addCase(filterPlace.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.last_page = action.payload.last_page;
      })
      .addCase(filterPlace.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default placeSlice.reducer;
