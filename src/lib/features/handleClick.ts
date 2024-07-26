import { createSlice, CreateSliceOptions } from "@reduxjs/toolkit";

type state = {
  state:boolean
}

const initialState:state = {
  state: false,
}

const click = createSlice({
  name: "handleClick",
  initialState,
  reducers: {
    handleClick: (state, action) => {
      
    }
  }
});

export const { handleClick }= click.actions;
export default click.reducer;