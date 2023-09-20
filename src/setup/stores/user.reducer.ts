import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../types/user";

type UserState = {
  user: IUser | null;
};

const userTest = {
  email: "test@gmail.com",
  password: "123456",
  username: "Ngguyen Van A",
  roles: ["0","1"],
};

const initialState: UserState = {
  user: userTest,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, actions: PayloadAction<IUser>) => {
      state.user = actions.payload;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const setUser = userSlice.actions.setUser;
export const removeUser = userSlice.actions.removeUser;
export const userReducer = userSlice.reducer;
