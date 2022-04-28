import './App.scss';
import {Header} from './components/Header/Header';
import {Navigation} from './components/Navigation/Navigation';
import {Profile} from './components/Profile/Profile';
import {Dialogs} from "./components/Dialogs/Dialogs";
import {Setting} from "./components/Setting/Setting";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";

import {Route, Routes} from "react-router-dom";
import React from "react";


function App({store}) {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navigation/>
            <div className='app-wrapper__content'>
                <Routes>

                    <Route exact path='/profile'
                           element={
                               <Profile store={store}/>
                           }>

                    </Route>

                    <Route exact path='/dialogs'
                           element={
                               <Dialogs state={store.state.dialogsPage}/>
                           }>
                    </Route>

                    <Route exact path='/news'
                           element={
                               <News/>
                           }>
                    </Route>

                    <Route exact path='/music'
                           element={
                               <Music/>
                           }>
                    </Route>

                    <Route exact path='/setting'
                           element={
                               <Setting/>
                           }>
                    </Route>

                </Routes>
            </div>
        </div>
    )
}

export default App;
