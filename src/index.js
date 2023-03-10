import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from "./app/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='overflow-hidden'>
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  </React.StrictMode>
);


