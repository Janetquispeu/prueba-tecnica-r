import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import configureStore from '@app/store/configureStore';
import { GlobalStyle } from './ui/globalStyle';
import { Root } from './view';

const store = configureStore();
const container = document.getElementById('root');
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
