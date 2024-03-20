import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from '@app/store/configureStore';
import { Root } from './view';
import { GlobalStyle } from './ui/globalStyle';

const store = configureStore();
const container = document.querySelector('#root-dev');
const root = createRoot(container);

root.render(
  <Provider store={store}>
    <GlobalStyle />
    <Router>
      <Root
        email={''}
      />
    </Router>
  </Provider>
);
