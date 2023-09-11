import { } from 'react'
import {Outlet} from 'react-router-dom'
import Nav from '../componentes/Nav'
import Footer from '../componentes/Footer'


function App() {
  

  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
