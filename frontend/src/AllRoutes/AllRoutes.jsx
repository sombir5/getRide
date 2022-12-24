import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import SignUp from '../Pages/SignUp'
import SignIn from '../Pages/SignIn'
import Payment from '../Pages/Payment'
import BookCar from "../Pages/BookCar"
import Cars from "../Pages/Cars"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/cars" element={<Cars/>} />
      <Route path="/cars:/id" element={<BookCar/>} />
      <Route path="/payment" element={<Payment/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/signin" element={<SignIn/>} />
    </Routes>
  )
}

export default AllRoutes