import { createSlice } from '@reduxjs/toolkit';
import { fetchPeople } from '../thunk';

const initialState = {
  people: [],
  loading: false,
  error: null,
};

const peopleSlice = createSlice({
  name: 'people',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.people = action.payload;
        state.loading = false;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
      });
  },
});

export default peopleSlice.reducer;