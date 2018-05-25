import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Dashboard from './Dashboard';
import registerServiceWorker from './registerServiceWorker';
import store from './store';

console.log(store.getState());

ReactDOM.render(<Dashboard />, document.getElementById('root'));
registerServiceWorker();
