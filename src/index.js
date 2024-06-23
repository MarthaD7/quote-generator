import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./Quote/_quote.scss";
import "./Nav/_navbar.scss";
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);


// What's better... to have import "../src/_quote.scss";
//import "./_navbar.scss"; on the index.js file OR to have them 
//in their individual files? Originally I had quote scss in quote file. 
//Still worked 