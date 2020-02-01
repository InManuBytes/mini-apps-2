import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import Server from './server';

ReactDOM.render(<App server={Server} />, document.getElementById('app'));
