import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './AboutUs'
import Home from './Home'
import Register from './Register'
import Login from './Login'
export default class Mid extends Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/Register" element={<Register/>}></Route>
                <Route path="/AboutUs" element={<AboutUs/>}></Route>
                <Route path="/Login" element={<Login/>}></Route>
            </Routes>
        )
    }
}
