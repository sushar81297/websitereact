import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTownship } from "../../Api";
import axios from "axios";

export const fetchTownship = createAsyncThunk(
  "township/fetchTownship",
  async () => {
    const response = await axios.get(getTownship);
    return response.data;
  }
);

const townshipSlice = createSlice({
  name: "township",
  initialState: {
    data: [],
    type: [
      { id: 1, name: "Hostel" },
      { id: 2, name: "Rent" },
      { id: 3, name: "Sale" },
    ],
    filterTSP: null,
    filterType: null,
    status: "idle",
    error: null,
  },
  reducers: {
    setFilterTSP: (state, action) => {
      state.filterTSP = action.payload;
    },
    setFilterType: (state, action) => {
      state.filterType = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTownship.pending, (state) => {
        // state.status = "loading";
      })
      .addCase(fetchTownship.fulfilled, (state, action) => {
        state.data = [...action.payload.data];
      })
      .addCase(fetchTownship.rejected, (state, action) => {
        // state.status = "failed";
        // state.error = action.error.message;
      });
  },
});

export const { setFilterTSP, setFilterType } = townshipSlice.actions;

export default townshipSlice.reducer;
