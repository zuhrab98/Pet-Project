import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";

import 'macro-css'
import App from "./App";
import {store} from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById('root'));

// function renderEntireTree() {
    root.render(
        <Router>
            <Provider store={store}>
                <React.StrictMode>
                    <App/>
                </React.StrictMode>
            </Provider>

        </Router>
    );
// }

// renderEntireTree()

// При каждом изминении state у нас будет срабатывать подписка и
// передовать новое значение state в аргументы
// store.subscribe(() => {
//     renderEntireTree()
// })