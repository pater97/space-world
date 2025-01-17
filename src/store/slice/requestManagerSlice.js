import { createSlice } from '@reduxjs/toolkit';
// -- THUNK
import { fetchPeople } from '../thunk';
// -- UTILS
import { getLastCharacter } from '../../utils';

const initialState = {
  people: [],
  loading: false,
  error: null,
  nextPage:null,
  prevPage:null,
};

const requestManager = createSlice({
  name: 'requestManager',
  initialState,
  reducers: {},
  nextPage:null,
  prevPage:null,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.people = action.payload?.results;
        state.loading = false;
        state.nextPage = action.payload?.next ? getLastCharacter(action.payload.next) : null;
        state.prevPage = action.payload?.previous ? getLastCharacter(action.payload.previous) : null;
      })
      .addCase(fetchPeople.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; 
        state.nextPage = null;
        state.prevPage = null;
      });
  },
});

export default requestManager.reducer;