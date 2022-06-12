import { Observer } from 'mobx-react'
import React from 'react'
import Header from './../../../Components/SubHeader'
import Footer from './../../../Components/Footer'

const Home = () => {
  return (
    <Observer>
       {()=>(
           <>
            <Header /> 
            <Footer />          
            </>
       )}
    </Observer>
  )
}

export default Home