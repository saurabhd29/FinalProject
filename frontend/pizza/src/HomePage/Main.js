import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import MenuBody from './MenuBody'
import NavBar from '../components/NavBar'

export default function Main() {
  return (
    <div>
        <Header/>
        <NavBar/>
        <MenuBody/>
        <Footer/>
    </div>
  )
}
