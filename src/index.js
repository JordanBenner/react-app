import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import HelloMessage from './hello.jsx';

ReactDOM.render(<HelloMessage name="Jordan"/>, document.getElementById('root'));
registerServiceWorker();
