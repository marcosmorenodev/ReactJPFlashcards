import React from 'react'
import {FaRotate, FaCheck} from "react-icons/fa6";

const CardTop = ({japanese, flipCard, id}) => {
    return (
    <>
        <div className='bg-inherit p-1 w-full text-right ml-4'>
                <button 
                    className='p-1.5 rounded-3xl transition-all hover:bg-gray-200' 
                    onClick={() => flipCard(id)}
                >
                    <FaRotate 
                        className='text-2xl text-red-400 hover:text-red-600'
                    />
                </button>
            </div>

        <h1 className='text-6xl text-black'> {japanese} </h1>
    </>
  )
}

export default CardTop
