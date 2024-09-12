import React from 'react'
import Lottie from "lottie-react";
import animationData from "./Animation - 1710494698475.json";

const LoadingPage = () => {
  return (
    <div className='flex justify-center'>
      <Lottie animationData={animationData} style={{width: '800px', height: '750px'}} />
    </div>
  )
}

export default LoadingPage
