import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  data: number;
  title: string;
}

const initialState: CounterState = {
  data: 42,
  title: "Redux",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.data += action.payload; // use Immer to prevent mutating state
    },
    decrement: (state, action) => {
      state.data -= action.payload; // use Immer to prevent mutating state
    },
  },
});

export const {increment, decrement} = counterSlice.actions;