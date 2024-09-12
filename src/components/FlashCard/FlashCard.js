import React from 'react';
import CardBack from './CardBack';
import CardFront from './CardFront';
import ReactCardFlip from 'react-card-flip';

const FlashCard = ({char, flipCard}) => {
    return (
        <div className='flex justify-evenly mt-24 transition-all'>
            <div 
                className='p-1 rounded-lg w-fit border-4 border-red-400 shadow-lg'
            >
                <div 
                    className='bg-white p-3 flex flex-col items-center w-44'
                    key= {char.id}
                >
                    {
                        <ReactCardFlip isFlipped={char.isFlipped} flipDirection='horizontal'>
                            <CardFront 
                                japanese={char.japanese}
                                example={char.example}
                                meaning = {char.meaning}
                                flipCard={flipCard}
                                id={char.id}
                            />

                            <CardBack 
                                romaji={char.romaji}
                                pronunciation={char.pronunciation}
                                flipCard={flipCard}
                                id={char.id}
                            />
                        </ReactCardFlip>
                    }
                </div>
            </div>
        </div>
    ) 
}

export default FlashCard
