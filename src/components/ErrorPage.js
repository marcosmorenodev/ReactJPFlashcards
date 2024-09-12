import React from 'react'
import { Link } from 'react-router-dom'
import Lottie from "lottie-react";
import animationData from "./Animation - 1713345025103.json";


const ErrorPage = ({err}) => {
  return (
    <div>
      <div className='w-screen flex justify-center'>
        <Lottie animationData={animationData} style={{width: '600px', height: '400px'}} />
      </div>

      <h1 className='text-red-500 text-4xl mb-5 font-bold'> Error: {err}! </h1>
      <Link to="/" className='text-orange-400 text-2xl font-semibold'>
        Return to Homepage
      </Link>
    </div>
  )
}

export default ErrorPage
