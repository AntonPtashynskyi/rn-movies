import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setAuthName: (state, action) => {
      state.name = action.payload;
    },
    logOut: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setAuthName, logOut } = authSlice.actions;
