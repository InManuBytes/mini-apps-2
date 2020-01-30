import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Server from './server';

ReactDOM.render(<App server={Server} />, document.getElementById('app'));
