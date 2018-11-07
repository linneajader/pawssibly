import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Normalize.css';
import AppState from './AppState';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <AppState debug>
        {({appState, setAppState}) => {
            return <App {...{appState, setAppState}}/>;
        }}
    </AppState>,
    document.getElementById('root')
);
registerServiceWorker();
