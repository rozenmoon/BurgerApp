import React from 'react'
import classes from './BuildControl.css'

const BuildControl = (props) =>
{   return(
    <div className = {classes.BuildControl}>
        <div className = {classes.Label}>{props.label}</div>
        <button className = {classes.Less} onClick = {props.Less} disabled = {props.disableInfo_less} >Less</button>
        <button className = {classes.More} onClick = {props.More} disabled = {props.disableInfo_more} >More</button>
    </div>
    );
}

export default BuildControl;
