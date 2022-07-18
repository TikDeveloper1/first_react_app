import React, { useState } from 'react'
import { Counter } from '../counter/Counter'
import Footer from '../footer/Footer'
import Header from '../header/Header'

const Layout = ({children}) => {
  const [isShowCounter,setIsShowCounter] = useState(false);

  const toggleCounter = () => setIsShowCounter(prev => !prev);

  return (
   <>
    <Header />
    <div style={{margin: "25px 0"}}>
      {isShowCounter && <Counter/>}
      <button onClick={toggleCounter}> {isShowCounter? "Hide Counter" : "Show Counter"} </button>
    </div>

    <main>
        {children}
    </main>
    <Footer/>
   </>
  )
}

export default Layout