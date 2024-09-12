import React from 'react'
import CardTop from './CardTop'
import CardBottom from './CardBottom'

const CardFront = ({japanese, flipCard, example, meaning, id}) => {
    return (
        <>
            <CardTop 
                japanese={japanese}
                flipCard={flipCard}
                id={id}
            />

            <CardBottom 
                example={example}
                meaning={meaning}
            />
        </>
    )
}

export default CardFront
