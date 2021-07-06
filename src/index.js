import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from "./store/store";
import {Provider} from 'react-redux'
import reportWebVitals from './reportWebVitals';

import './index.css';
import App from './App';



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);


reportWebVitals();
