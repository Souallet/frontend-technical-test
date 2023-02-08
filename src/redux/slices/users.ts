import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../store";

import { User } from "../../types/user";

// Define a type for the slice state
interface ConversationsState {
  current: User;
}

// Define the initial state using that type
const initialState: ConversationsState = {
  current: {
    id: 1,
    nickname: "Thibaut",
    token: "xxxx",
  },
};

export const counterSlice = createSlice({
  name: "users",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.current = action.payload;
    },
  },
});

export const { setCurrentUser } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state;

export default counterSlice.reducer;
