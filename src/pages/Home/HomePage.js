import React from 'react'

//component
import HeaderComponent from '../components/HeaderComponent'
import FirstSection from './components/FirstSection'
import SecondSection from './components/SecondSection'

//style
import './styles/index.css'


function HomePage() {
  return (
    <div>

        <HeaderComponent />

        <FirstSection />

        <SecondSection />

    </div>
  )
}

export default HomePage