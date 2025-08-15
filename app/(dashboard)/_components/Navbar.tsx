import React from 'react'
import NavbarRoutes from './navbar-routes'
import MobileSideBar from './MobileSideBar'

const Navbar = () => {
  return (
    <div className="bg-white text-black shadow-sm h-full p-4 border-b flex items-center">
      {/* mobile routes*/}
      <MobileSideBar/>
      {/*sidebar routes*/}
      <NavbarRoutes />
      {/* Add any additional navbar content here */}
    </div>
  )
}

export default Navbar
