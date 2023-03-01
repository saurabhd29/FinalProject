import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import CheckOutDetails from './CheckOutDetails'

export default function CheckOut() {
  return (
    <div>
        <Header/>
        <NavBar/>
        <CheckOutDetails/>
        <Footer/>
    </div>
  )
}
