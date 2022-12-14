import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {DataLayer} from "./Common/DataLayer";
import reducer, {initialState} from "./Common/reducer";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <React.StrictMode>
        <DataLayer initailState={initialState} reducer={reducer}>
            <App/>
        </DataLayer>
    </React.StrictMode>
);

