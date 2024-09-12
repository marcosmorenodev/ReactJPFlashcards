import React from 'react'

const NavBar = ({children}) => {
  return (
    <nav
        className='grid grid-cols-auto text-2xl text-red-400 font-semibold bg-white'
    >
      {children}
    </nav>
  )
}

export default NavBar
