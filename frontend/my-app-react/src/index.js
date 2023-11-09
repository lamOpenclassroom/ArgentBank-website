import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Signin from './pages/signin'
import User from './pages/user'
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin />} />
                <Route path="/signout" element={<User />}/>
            </Routes>
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)