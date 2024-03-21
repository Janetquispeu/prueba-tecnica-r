import { createAsyncThunk } from '@reduxjs/toolkit';
import { API_URL } from '@app/config/environments';

const URL = API_URL;

export const serviceUser = async () => {
  const URL_LOCAL = `${URL}/user.json`;

  const response = await fetch(URL_LOCAL, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  });

  const user = await response.json();

  return user;
};

export const fetchUser = createAsyncThunk(
  'user/get',
  async () => {
    const response = await serviceUser();

    return response;
  }
);
