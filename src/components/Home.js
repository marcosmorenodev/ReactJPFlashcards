import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <main className='mt-14 font-semibold flex flex-col justify-center items-center overflow-auto'>
      <h1 className='text-orange-400 text-4xl my-5'>
        Welcome!
      </h1>
      <h2 className='text-red-400 text-3xl underline underline-offset-2 mt-8'>
        What alphabet would you like to learn?
      </h2>
      
      <div
        className='mt-28 bg-white border-orange-400 border-4 py-16 px-10 rounded-2xl shadow-lg flex justify-between gap-6'
      >
        <button className='bg-red-400 text-white text-lg p-3 rounded-xl shadow-md transition-all hover:bg-red-600'>
          <Link to="/hira-chars/vowels">Hiragana Alphabet</Link>
        </button>
        
        <button className='bg-red-400 text-white text-lg p-3 rounded-xl shadow-md transition-all hover:bg-red-600'>
          <Link to="/kata-chars/vowels">Katakana Alphabet</Link>
        </button>
      </div>
    </main>
  )
}

export default Home
