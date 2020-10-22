import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeContent from './components/HomeContent'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import About from './components/About'
import Term from './components/Term'

function MainApp() {
   return (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route path="/about-us">
                <About/>
            </Route>
            <Route path="/">
                <HomeContent/>
            </Route>
            <Route path="/terms">
                <Term/>
            </Route>
        </Switch>
        <Footer/>
    </BrowserRouter>
   );
}

export default MainApp;