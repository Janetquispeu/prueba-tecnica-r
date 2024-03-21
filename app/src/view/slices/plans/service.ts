import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '@app/config/environments';

const URL = API_URL;

export const servicePlans = async () => {
  const URL_LOCAL = `${URL}/plans.json`;

  const response = await fetch(URL_LOCAL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const plans = await response.json();

  return plans;
};

export const fetchPlans = createAsyncThunk(
  'plans/get',
  async () => {
    const response = await servicePlans();

    return response.list;
  }
);
