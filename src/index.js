import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MobileOS from './Components/MobileOS';
import MobileManufact from './Components/MobileManufact';
import ComponentBlueDiv from './Components/ComponentBlueDiv';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
    <MobileOS/>
    <MobileManufact/>
    <h3>Q3. Make the following component structure using functional components.</h3>
    <ComponentBlueDiv/>
  </>
);
reportWebVitals();
