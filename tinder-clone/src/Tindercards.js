import { useState } from 'react'
import './Tindercards.css'
import TinderCard from 'react-tinder-card'
function Tindercards() {
   const [people, setPeople] = useState([{
    name: 'William Abadie',
    url: "https://media1.popsugar-assets.com/files/thumbor/bP8iM4mIR-5YQm1_FFP2kEAlNpc/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/10/05/751/n/1922283/845970adb121519d_EMILYINPARIS_Season1_Episode3_00_09_02_15R/i/William-Abadie-as-Antoine-on-Emily-in-Paris.jpg"
   },
   {
       name: 'Reneé Rapp',
       url: "https://s.abcnews.com/images/Entertainment/WireAP_3d1760085bd7456fabec68221b383944_16x9_992.jpg"
   },
   {
       name: 'Miguel Herrán',
       url: "https://img.allvipp.com/www-promipool-de/image/upload/c_fill,g_faces,w_1200,h_1200,q_auto:eco,f_jpg/money_heist_this_is_miguel_herran_200424_ge53jl5jd6"
   },
   {
       name: 'Alyah Chanelle Scott',
       url: "https://static.cdn.turner.com/styles/scale_792/s3/images/2021-11/alyah-chanelle-scott_5.jpg?itok=UaIOAxY5"
   },
   {
       name: 'Antonio Cipriano',
       url: "https://static.onecms.io/wp-content/uploads/sites/20/2021/09/26/jagged-little-pill-antonio-cipriano-celia-rose-gooding.jpg"
   },
   {
       name: 'Ashley Park',
       url: "https://www.theintervalny.com/wp-content/uploads/2018/05/crop-3.jpg"
   },
   {
       name: 'Lucas Bravo',
       url: "https://www.vizaca.com/wp-content/uploads/2021/12/Lucas-Bravo-%E2%80%98The-Man-Behind-Gabriel.jpg"
   },
   {
       name: 'Lucien Laviscount',
       url: "https://images.indianexpress.com/2015/02/luscien-laviscount-759.jpg"
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