import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  people: [],
};

export const peopleSlice = createSlice({
  name: "peopleSlice",
  initialState,
  reducers: {
    setPeople: (state, action) => {
      state.people = action.payload;
    },
  },
});

export const { setPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
