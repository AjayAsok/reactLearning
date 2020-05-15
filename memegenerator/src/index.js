import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import MyInfo from "./components/MyInfo"
import LeftRenderer from "./components/LeftRenderer"

ReactDOM.render(<App></App>, document.getElementById('content'));
// ReactDOM.render(
//   <MyInfo />,
//   document.getElementById('root')
// );
// ReactDOM.render(
//   <LeftRenderer />,
//   document.getElementById('new')
// );

/* <React.StrictMode>
    <App />
  </React.StrictMode> */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
