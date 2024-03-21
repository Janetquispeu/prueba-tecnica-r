import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import user from '@app/view/slices/user';
import plans from '@app/view/slices/plans';

export default () => {
  const store = configureStore({
    reducer: {
      user,
      plans,
      form: formReducer,
    }
  });

  return store;
}
