import { createSlice } from "@reduxjs/toolkit";

// const accessToken = localStorage.getItem('accessToken');
// const isLoggedIn = accessToken ? true : false;

const initialState = {
  isLoggedIn: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      // const token = localStorage.getItem("accessToken");
      state.isLoggedIn = false;
      localStorage.clear();
    },
  },
});

// Action creators are generated for each case reducer function
export const authActions = auth.actions;
export default auth.reducer;
