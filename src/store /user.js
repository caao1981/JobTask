import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: "",
  city: "",
  email: "",
  fullName: "",
  phone: "",
  profilePic: "",
  requestId: "",
  verified: "",
  zipCode: "",
  _id: "",
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUserInfo: (state, { payload }) => {
      state.address = payload.address;
      state.city = payload.city;
      state.email = payload.email;
      state.fullName = payload.fullName;
      state.phone = payload.phone;
      state.profilePic = payload.profilePic;
      state.requestId = payload.requestId;
      state.verified = payload.verified;
      state.zipCode = payload.zipCode;
      state._id = payload._id;
      return state;
    },
    resetUser: (state) => {
      state = initialState;
      return state;
    },
    updateProfilePicture: (state, { payload }) => {
      state.profilePic = payload.profilePic;
    },
  },
});

// Action creators are generated for each case reducer function
export const userActions = user.actions;
export default user.reducer;
