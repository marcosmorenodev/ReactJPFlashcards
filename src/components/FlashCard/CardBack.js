import React from 'react'
import { FaRotate } from "react-icons/fa6";

const CardBack = ({romaji, pronunciation, flipCard, id}) => {
    return (
        <>
            <div className='bg-inherit p-1 w-full text-right'>
                <button 
                    className='p-1.5 rounded-3xl transition-all hover:bg-gray-200' 
                    onClick={() => flipCard(id)}
                >
                    <FaRotate 
                        className='text-2xl text-red-400 hover:text-red-600'
                    />
                </button>
            </div>
                
            <h1 className='text-6xl text-black'> {romaji.toUpperCase()} </h1>
            <h2 className='text-xl text-red-400 mt-3'>Character Pronunciation:</h2>
            <h3 className='text-xl text-black font-semibold mt-2'> {pronunciation} </h3>
        </>
    )
}

export default CardBack
