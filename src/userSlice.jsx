import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: "",
    userName: "",
    email: "",
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload.user;
      state.userName = action.payload.userName;
      state.email = action.payload.email;
    },

    updateEmail: (state, action) => {
      state.email = action.payload.email;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUser, updateEmail } = userSlice.actions;

export default userSlice.reducer;
