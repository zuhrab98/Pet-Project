import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";

import 'macro-css'
import App from "./App";
import {store} from "./redux/redux-store";
import {MyContext} from "./MyContext";

const root = ReactDOM.createRoot(document.getElementById('root'));

function renderEntireTree(store) {
    root.render(
        <Router>
            <MyContext.Provider value={store}>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </MyContext.Provider>

        </Router>
    );
}

renderEntireTree(store)

// При каждом изминении state у нас будет срабатывать подписка и
// передовать новое значение state в аргументы
store.subscribe(() => {
    renderEntireTree(store)
})