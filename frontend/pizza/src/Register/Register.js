import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import NavBar from '../components/NavBar'
import RegisterDetails from './RegisterDetails'

export default function Register() {
  return (
    <div>
        <Header/>
        <NavBar/>
        <RegisterDetails/>
        <Footer/>

    </div>
  )
}
