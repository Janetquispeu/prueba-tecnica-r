import { configureStore } from '@reduxjs/toolkit';
import { reducer as formReducer } from 'redux-form';
import user from '@app/view/slices/user';
import plans from '@app/view/slices/plans';
import saveUserData from '@app/view/slices/saveUserData';

export default () => {
  const store = configureStore({
    reducer: {
      user,
      plans,
      saveUserData,
      form: formReducer,
    }
  });

  return store;
}
