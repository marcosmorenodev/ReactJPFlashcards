import React from 'react'

const ResultMessage = ({correctAnswers, count, percentage}) => {
    //ToDo: Style the whole thing off

    return (
        <div>
            <h1> You got {count} of {correctAnswers.length} right </h1>
            <h3> Total: {percentage.toFixed(2)} %</h3>
            
            {
                count === 0 ?
                <h2>
                "To become learned, each day add something. To become enlightned, each day drop something." -Lao Tzu
                </h2>

                :

                count >= 10 ? 
                <h2>
                    You'll get better next time!
                </h2>

                :

                count >= 25 ? 
                <h2>
                    Gettin' the hang of it! Keep going!
                </h2>

                :

                <h2>Congratulations, you aced it!</h2>
            }

            <button>Retry</button>
        </div>
    )
}

export default ResultMessage
