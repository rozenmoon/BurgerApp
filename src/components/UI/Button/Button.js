import React from 'react'
import classes from './Button.css'

const button = (props) => {
    return(
        <button onClick= {props.clicked}>{props.children}</button>
    )
}

export default button;