import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import ContactDetails from './ContactDetails'

export default function Contact() {
  return (
    <div>
        <Header/>
        <NavBar/>
        <ContactDetails/>
        <Footer/>
    </div>
  )
}
