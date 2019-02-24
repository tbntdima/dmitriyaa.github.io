// Dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

// Custom components
import App from './components/App/';

// Styles
import '@fortawesome/fontawesome-free/css/all.css';
import './styles/bootstrap.scss';
import './styles/index.scss';

ReactDOM.render((
  <Router>
    <App />
  </Router>
), document.getElementById('root'));
