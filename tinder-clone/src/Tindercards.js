import { useState } from 'react'
import './Tindercards.css'
import TinderCard from 'react-tinder-card'
function Tindercards() {
   const [people, setPeople] = useState([{
    name: 'Aditya Roy Kapoor',
    url: "https://www.koimoi.com/wp-content/new-galleries/2022/01/when-aditya-roy-kapur-received-a-love-letter-by-a-jabra-fan-which-was-covered-in-blood-heres-how-he-reacted-001.jpg"
   },
   {
       name: 'Reneé Rapp',
       url: "https://artworks.thetvdb.com/banners/v4/actor/8181659/photo/6196f5ff8ad03.jpg"
   },
   {
       name: 'Gavin Leatherwood',
       url: "https://i.pinimg.com/originals/76/ec/79/76ec796ed7e6ce56f1b11dfc6a4d71f5.jpg"
   }
]) 

const swiped = (direction, nameToDelete) =>{
    console.log("removing : " + nameToDelete);
}
const outOfFrame = (name) =>{
    console.log(name + "left the screen");
}
  return (
    <div className='tindercards'>
        <div className='card_container'>
        {people.map((person) => (
            <TinderCard 
            className='swipe'
            key={person.name}
            preventSwipe={("up", "down")}
            onSwipe={(dir) => swiped (dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
            >
                <div style={{backgroundImage: `url(${person.url})` }} className='card'>
                    <h3>{person.name}</h3>
                </div>
            </TinderCard>
        ))}
    </div>
    </div>
  )
}

export default Tindercards