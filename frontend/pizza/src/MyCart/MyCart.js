import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import CartDetails from './CartDetails'

export default function MyCart() {
  return (
    <div>
        <Header/>
        <NavBar/>
        <CartDetails/>
        <Footer/>
    </div>
  )
}
