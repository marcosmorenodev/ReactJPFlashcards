import React, { useEffect, useState } from 'react'
import FlashCard from "./FlashCard/FlashCard";

const GroupDetails = ({group}) => {
  const [currentGroup, setCurrentGroup] = useState([]); // *Var used for local filtering purposes

  function flipCard(id) { 
    const filteredGroup = currentGroup.map(char => char.id === id ? {...char, isFlipped: !char.isFlipped} : char);

    setCurrentGroup(filteredGroup);
  }

  useEffect(() => { if (group && group.chars) { setCurrentGroup(group.chars); } }, [group]); //Sets a new group whenever the group is changed

  return (
    <main>
      <div className="flex flex-1 gap-1 justify-evenly flex-wrap">
        {
          currentGroup.map(char => 
            (<FlashCard 
              key={char.id}
              char={char}
              flipCard={flipCard}
              group={group}
            />)
          )
        }        
      </div>
    </main>
  )
}

export default GroupDetails
