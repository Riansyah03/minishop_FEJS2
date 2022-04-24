import React from 'react'
import { Outlet } from 'react-router'

const Main = () => {
  return (
    //   flex-grow untuk megar kebawah, mengisi kekosongan konten main (agar posisi footer berada dibawah)
    <div id="main" className='flex-grow'>
        <Outlet />
    </div>
  )
}

export default Main