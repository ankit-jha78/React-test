
import React from 'react'

export const Nav = () => {
  return (
    <nav className='h-16 bg-gray-200  text-2xl'>
        <div className='max-w-7xl mx-auto flex items-center justify-between h-16 px-4 md:px-8'>
            <div className='w-3xl ml-5'>
            <h1 className='text-3xl font-bold'>ChatApp</h1>
            </div>
            <ul className='flex items-center gap-8'>
                <li>
                <a href="">Home</a>
                </li>
                <li>
                <a href="">About</a>
                </li>
                <li>
                <a href="">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
  )
}
