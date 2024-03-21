import { createSlice } from '@reduxjs/toolkit';

let storeData = {};

const initialState = {
  data: {},
  fetch: false,
  loading: false
};

export const saveUserDataSlice = createSlice({
  name: 'saveUserData',
  initialState,
  reducers: {
    saveData: (state, action) => {
      storeData = {...storeData, ...action.payload.data};
      state.data = storeData;
    }
  }
});

export const selectSaveUserData= (state) => state.saveUserData;

export const { saveData } = saveUserDataSlice.actions;

export default saveUserDataSlice.reducer;
