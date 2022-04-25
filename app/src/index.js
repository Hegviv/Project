import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeContextWrapper from './components/theme/ThemeContextWrapper';
import Fololdal from './components/Fololdal';

ReactDOM.render(
  <ThemeContextWrapper>
  <React.StrictMode>
    <App/>
  </React.StrictMode>
  </ThemeContextWrapper>,
  document.getElementById('root')
);

reportWebVitals();
