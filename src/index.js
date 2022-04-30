import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";

import 'macro-css'
import App from "./App";
import {store} from "./redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));

export function renderEntireTree() {
    root.render(
        <Router>
            <React.StrictMode>
                <App store={store}/>
            </React.StrictMode>
        </Router>
    );
}

renderEntireTree(store.state)

store.subscribe(renderEntireTree)