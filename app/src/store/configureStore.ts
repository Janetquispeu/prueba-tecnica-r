import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';

export default () => {
  const store = configureStore({
    reducer: {
      form: formReducer,
    }
  });

  return store;
}
