import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchUser } from './service';

const initialState = {
  data: [],
  fetch: false,
  loading: false
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(fetchUser.pending),
      (state) => {
        state.loading = true;
        state.fetch = false;
      }
    ).addMatcher(
      isAnyOf(fetchUser.rejected),
      (state) => {
        state.loading = false;
        state.fetch = true;
      }
    ).addMatcher(
      isAnyOf(fetchUser.fulfilled),
      (state, action) => {
        state.data = action.payload;
        state.fetch = true;
        state.loading = false;
      }
    );
  }
});

export const selectUser= (state) => state.user;

export default userSlice.reducer;
