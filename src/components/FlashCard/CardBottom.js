import React, { useState } from 'react'

const CardBottom = ({example, meaning}) => {
    const [hidden, setHidden] = useState(true);

    return (
        <div>
            <h2 className='text-2xl text-red-400 mt-3 cursor-default'>Example:</h2>

            <h3 className='text-3xl text-black mt-2.5'> {example} </h3>

            {
                hidden ? 
                <button 
                    className='text-orange-400 rounded-3xl p-1.5 transition-all mt-2 w-fit hover:bg-gray-200 hover:text-red-600'
                    onClick={() => setHidden(curr => !curr)}
                >
                    Show Meaning
                </button>
                
                :

                (<>
                    <button 
                        className='text-orange-400 rounded-3xl p-1.5 transition-all mt-2 hover:bg-gray-200 hover:text-red-600'
                        onClick={() => setHidden(curr => !curr)}
                    >
                        Hide Meaning
                    </button>
                    <h4 className='text-red-400 font-semibold mt-1'> {meaning} </h4>
                </>)
            }
        </div>
    )
}

export default CardBottom
