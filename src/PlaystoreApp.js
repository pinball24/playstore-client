import React from 'react'

export default function PlaystoreApp(props) {
    return (
        <div className='app'>
            <h2>{props.App}</h2>
            <div className='genres'>Genre: {props.Genres}</div>
            <div className='rating'>Rating: {props.Rating}</div>
        </div>
    )
}