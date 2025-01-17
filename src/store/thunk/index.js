import { createAsyncThunk } from '@reduxjs/toolkit';
// -- AXIOS SERVICE
import { getPeople } from '../../services';


export const fetchPeople = createAsyncThunk(
  'people/fetchPeople', // action name
  async (_, thunkAPI) => {  // _ indica un'argomento non utilizzato
    try {
      const peopleData = await getPeople();
      return peopleData; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);