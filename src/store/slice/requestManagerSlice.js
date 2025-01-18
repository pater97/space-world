import { createSlice } from '@reduxjs/toolkit';
// -- THUNK
import { fetchPeople,fetchPlanetDetails } from '../thunk';
// -- UTILS
import { getLastCharacter } from '../../utils';

const initialState = {
  people: [],
  loading: false,
  error: null,
  nextPage:null,
  prevPage:null,
  planetDetails:null,
  loadingPlanetDetails:false,
  errorPlanetDetails:null
};

const requestManager = createSlice({
  name: 'requestManager',
  initialState,
  reducers: {},
  nextPage:null,
  prevPage:null,
  planetDetails:null,
  loadingPlanetDetails:false,
  errorPlanetDetails:null,
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        console.log(action)
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
      })
      .addCase(fetchPlanetDetails.pending, (state) => {
        state.loadingPlanetDetails = true;
        state.errorPlanetDetails = null;
      })
      .addCase(fetchPlanetDetails.fulfilled, (state, action) => {
        state.planetDetails = action.payload; 
        state.loadingPlanetDetails = false;
      })
      .addCase(fetchPlanetDetails.rejected, (state, action) => {
        state.loadingPlanetDetails = false;
        state.errorPlanetDetails = action.payload;
      });
  },
});

export default requestManager.reducer;