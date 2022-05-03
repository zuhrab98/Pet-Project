import {dialogsReducer} from "./dialogs-reducer";
import {profileReducer} from "./profile-reducer";
import {configureStore} from "@reduxjs/toolkit";

// const redusers = combineReducers({
//     dialogsPage: dialogsReducer,
//     profilePage: profileReducer
// })

export const store = configureStore({
    reducer: {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer
    }
})