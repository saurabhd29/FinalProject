import React from 'react'
import OrderDetails from './OrderDetails'
import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'

export default function MyOrders() {
  return (
    <div>
        <Header/>
        <NavBar/>
        <OrderDetails/>
        <Footer/>
    </div>
  )
}
