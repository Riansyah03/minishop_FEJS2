import React from 'react'
// fungsi outlet adalah untuk menampilkan child content dari child route di app js ketika dipanggil
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Layout = () => {
  return (
    //   min-h-screen = minimal tingginya seukuran layar screen komputer
    // flex-col membuat colom (kebawah)
    <div className='min-h-screen flex flex-col'>
       <Header />
       <Main />
       <Footer />
    </div>
  )
}

export default Layout