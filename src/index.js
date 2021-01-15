import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App githubURL="https://github.com/alex3985/task_1_2"/>, 
  document.getElementById('root')
);

registerServiceWorker();
