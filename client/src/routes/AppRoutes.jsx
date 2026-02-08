import React from 'react'
import '../App.css'
import {BrowserRouter as Router , Route, Routes } from 'react-router-dom'
import UserRegister from '../pages/UserRegister'
import UserLogin from '../pages/UserLogin'
import FoodPartnerRegister from '../pages/FoodPartnerRegister'
import FoodPartnerLogin from '../pages/FoodPartnerLogin'
import Home from '../pages/general/Home'
import FoodPartner from '../pages/general/FoodPartner'
import Reels from '../pages/Reels'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
        <Route path='/user/register' element={<UserRegister/>}/>
        <Route path='/user/login' element={<UserLogin/>}/>
        <Route path='/food-partner/register' element={<FoodPartnerRegister/>}/>
        <Route path='/food-partner/login' element={<FoodPartnerLogin/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/food-partner' element={<FoodPartner/>}/>
        <Route path='/reels' element={<Reels/>}/>
        </Routes>
    </Router>
  )
}

export default AppRoutes