import React from 'react'
import classes from './BuildControls.css';
import BuildContol from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type : 'salad'},
    {label: 'Bacon', type : 'bacon'},
    {label: 'Cheese', type : 'cheese'},
    {label: 'Meat', type : 'meat'},
];

const buildControls = (props) => (
    <div className ={classes.BuildControls}>
        <div>Current Price: <strong>{props.price.toFixed(2)}</strong> </div>
        {controls.map(clt => (
            <BuildContol 
                More = { () => props.More(clt.type) } 
                Less = { () => props.Less(clt.type) } 
                key={clt.label} 
                label={clt.label} 
                disableInfo_less= {props.disableInfo_less[clt.type]} 
                disableInfo_more= {props.disableInfo_more[clt.type]}  />      
        ))}
          
        <button 
                className = {classes.OrderButton} 
                disabled = {!props.purchasable} 
                onClick = {props.ordered}> ORDER </button>
    </div>
);

export default buildControls;
