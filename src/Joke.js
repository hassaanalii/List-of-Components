import React from 'react'

export default function Joke(props) {
  return (
    <div>
        <h1>{props.id}</h1>
        <h3>{props.Joke}</h3>
        <p>{props.rating}</p>

    </div>
  )
}
