import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: string;
  token: string;
}

const initialState: UserState = {
  user: "",
  token: "",
};

export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});
export const { setUser, setToken } = userSlice.actions;
export default userSlice.reducer;
