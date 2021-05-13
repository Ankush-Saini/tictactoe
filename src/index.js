import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function displayIndexPage(){
    return (
        <div style = 'text-align:center;'>Ankush's React SandBox</div>
    );
}


serviceWorker.unregister();