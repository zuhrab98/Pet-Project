import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {configureStore} from "@reduxjs/toolkit";

// const thunk = require('redux-thunk')
//
// const middleware = process.env.NODE_ENV !== 'production' ?
//     [require('redux-immutable-state-invariant').default(), thunk] :
//     [thunk];

export const store = configureStore({
    reducer: {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer
    }
})