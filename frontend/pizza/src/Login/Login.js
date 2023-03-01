import React from 'react'
import LoginDetails from './LoginDetails'
import Footer from '../components/Footer'
import Header from '../components/Header'

import NavBar from '../components/NavBar'

export default function Login() {
  return (
    <div>
        <Header/>
        <NavBar/>
        <LoginDetails/>
        <Footer/>
    </div>
  )
}
