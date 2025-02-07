import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Signin from './pages/signin'
import User from './pages/user'
import Error from './component/error/error'
import { Provider } from 'react-redux'
import {store} from "./store"

 
ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Signin />} />
                    <Route path="/profil" element={<User />} />
                    <Route path="/*" element={<Error /> } />
                </Routes>
            </Router>
        </React.StrictMode>
    </Provider>,
document.getElementById('root')
)