import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/footer'
import Header from '../components/header'

const WebsiteLayout = () => {
  return (
    <div>
        <Header></Header>
        <main>
          <Outlet></Outlet>
        </main>
       <Footer></Footer>
    </div>
  )
}

export default WebsiteLayout