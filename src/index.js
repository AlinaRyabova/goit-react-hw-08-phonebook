import React from 'react';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { store } from './redux/store';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
