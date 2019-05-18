import React from 'react';
import { Provider } from 'react-redux';

import 'config/Reactotron';

import store from 'store';
import Router from 'routes';

function App() {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
}

export default App;
