import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../Api";
import Cookies from "js-cookie";
import axios from "axios";
export const userAuth = createAsyncThunk(
  "user/userAuth",
  async ({ phone, pwd }) => {
    const response = await axios.post(login, {
      phone: phone,
      password: pwd,
      device_token: 11223,
    });
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idle",
    data: [],
    error: null,
    isAuthenticated: false,
    token: Cookies.get("token") || null,
  },
  reducers: {
    checkUser: (state) => {
      state.isAuthenticated = state.token ? true : false;
      if (!state.token) {
        state.data = [];
      }
    },
    logout: (state) => {
      Cookies.remove("token");
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(userAuth.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(userAuth.fulfilled, (state, action) => {
        state.status = "successed";
        Cookies.set("token", action.payload.data.token, { expires: 30 });
        // document.cookie = `token=${action.payload.data.token}; secure; max-age=2592000; HttpOnly`;
        state.data = action.payload.data;
      })
      .addCase(userAuth.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      }),
});
export const { checkUser, logout } = userSlice.actions;
export default userSlice.reducer;
