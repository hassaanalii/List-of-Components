import React from 'react'
import Joke from './Joke'

export default function App() {

 const myJokes = [
    {
        id:1,
        joke:"Why don't scientists trust atoms? Because they make up everything!",
        rating: 4

    },
    {
        id:2,
        joke:"I couldn't figure out why I wasn't sleeping, and then it dawned on me.",
        rating: 3
    }
    ,
    {

        id:3,
        joke:"Why don't seagulls fly over the bay? Because then they'd be called bagels!",
        rating: 2
    }
    ,{
        id:4,
        joke:"Why did the scarecrow win an award? Because he was outstanding in his field!",
        rating: 5
    }

 ]

  return (
    <div>
            
        {myJokes.filter(j => (j.rating > 3)).map(onlyParamter => (
             <Joke id={onlyParamter.id} Joke={onlyParamter.joke} rating={onlyParamter.rating} />)
        )}
       

    </div>


  )
}
