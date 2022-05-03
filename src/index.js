import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";

import 'macro-css'
import App from "./App";
import {store} from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderEntireTree(store) {
    root.render(
        <Router>
            <React.StrictMode>
                <App store={store}/>
            </React.StrictMode>
        </Router>
    );
}

renderEntireTree(store)

// При каждом изминении state у нас будет срабатывать подписка и
// передовать новое значение state в аргументы
store.subscribe(() => {
    renderEntireTree(store)
})