import { createAsyncThunk } from '@reduxjs/toolkit';
// -- AXIOS SERVICE
import { getPeople } from '../../services';
import { getPlanetDetails } from '../../services';


export const fetchPeople = createAsyncThunk(
  'requestManager/fetchPeople', 
  async (tablePage, thunkAPI) => {  
    try {
      const peopleData = await getPeople(tablePage);
      return peopleData; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchPlanetDetails = createAsyncThunk(
  'requestManager/fetchPlanetDetails',
  async (planetId, thunkAPI) => {
    try {
      const planetData = await getPlanetDetails(planetId);
      return planetData;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);