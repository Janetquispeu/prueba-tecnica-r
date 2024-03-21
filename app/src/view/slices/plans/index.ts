import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchPlans } from './service';

const initialState = {
  data: [],
  fetch: false,
  loading: false
};

export const plansSlice = createSlice({
  name: 'plans',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(fetchPlans.pending),
      (state) => {
        state.loading = true;
        state.fetch = false;
      }
    ).addMatcher(
      isAnyOf(fetchPlans.rejected),
      (state) => {
        state.loading = false;
        state.fetch = true;
      }
    ).addMatcher(
      isAnyOf(fetchPlans.fulfilled),
      (state, action) => {
        state.data = action.payload;
        state.fetch = true;
        state.loading = false;
      }
    );
  }
});

export const selectPlans= (state) => state.plans;

export default plansSlice.reducer;
