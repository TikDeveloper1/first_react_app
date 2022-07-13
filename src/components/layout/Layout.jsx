import React from 'react'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({x,y,z,children}) => {

  return (
   <>
    <Header />
    <main>
        <h1>{x}</h1>
        <h1>{y}</h1>
        <h1>{z}</h1>
        {children}
    </main>
    <Footer/>
   </>
  )
}

export default Layout