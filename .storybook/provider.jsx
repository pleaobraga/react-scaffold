import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as React from 'react';

interface a {
  children: React.ReactNode;
  store: any;
}

const ProviderWrapper = ({ children, store }: a) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
);

export default ProviderWrapper;
