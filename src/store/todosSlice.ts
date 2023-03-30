import { createSlice } from "@reduxjs/toolkit";

export interface TodoInterface {
  id: string;
  title: string;
  completed: boolean;
}

const initialState = {
  todos: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
});

export default todosSlice.reducer;
