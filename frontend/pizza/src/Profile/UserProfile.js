import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

import NavBar from '../components/NavBar'
import ProfileDetails from './ProfileDetails'


export default function UserProfile() {
  return (
    <div>
        <Header/>
        <NavBar/>
        <ProfileDetails/>
        <Footer/>

    </div>
  )
}
