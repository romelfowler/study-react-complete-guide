import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

// You can pass props here
ReactDOM.render(<App newTitle="Relevant Persons"/>, document.getElementById('root'));
registerServiceWorker();
