import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importing global styles
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optionally: Measure performance in your app
reportWebVitals();
