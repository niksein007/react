 import React from 'react'
 import './room.css'

const Room = (props) => {
    return (
        <div className="appartment">
        <img  src={props.picture}/>
        <img className="rating" src={props.rating}/>
            
        </div>
    )  
}

export default Room
