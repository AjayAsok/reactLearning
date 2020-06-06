import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(React.createElement('div', { style: { color: "red" } },
    React.createElement('h2', null, "I am a child")),
    document.getElementById('my-sub'));

ReactDOM.render(<App />, document.getElementById('root'));