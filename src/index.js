import React from 'react';
import { Provider } from 'react-redux';
import {store} from "./store/app"
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <App />
    </Provider>
  
);
