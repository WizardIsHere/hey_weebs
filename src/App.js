import React from 'react'

import './App.css'
import {Routes, Route, Navigate} from 'react-router-dom'
import Auth from './pages/auth/Auth'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import { useSelector } from 'react-redux'

const App = () => {
    const user = useSelector((state)=>state.authReducer.authData)
    return (
        <div className='App'>
            <div className='blur'style={{top: '-18%',right:'0' }}></div>
            <div className='blur'style={{top: '36%', left:'8%' }}></div>
            <Routes>
                <Route path='/' element={user?<Navigate to='home'/>:<Navigate to='auth'/>} />
                <Route path='/home' element={user? <Home/>: <Navigate to='../auth'/>} />
                <Route path='/auth' element={user? <Navigate to='../home' />: <Auth/>} />
            </Routes>
        </div>
    )
}

export default App
