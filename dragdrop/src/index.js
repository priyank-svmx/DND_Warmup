import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Board from "./components/Board"
import {registerObserver,moveKnight} from "./StateManagement/Game";
import * as serviceWorker from './serviceWorker';

registerObserver((KnightPosition)=>{
    ReactDOM.render(<Board knightPosition={KnightPosition}/>, document.getElementById('root'));
});
moveKnight(1,1);

// Observe((KnightPosition)=>{
//     ReactDOM.render(<Board knightPosition={KnightPosition}/>, document.getElementById('root_0'));
// });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
