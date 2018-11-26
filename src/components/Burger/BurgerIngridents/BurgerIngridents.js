import classes from './BurgerIngridents.css'
import React,{ Component } from 'react'
import Proptype from 'prop-types'

class BurgerIngridents extends Component {
    render(){
        let Ingridents = null;

        switch(this.props.type){
            case("bread-bottom"):
                Ingridents = <div className = {classes.BreadBottom}></div>
            break;
    
            case("bread-top"):
                Ingridents = (
                    <div className= {classes.BreadTop}>
                        <div className = {classes.Seeds1}></div>
                        <div className = {classes.Seeds2}></div>
                    </div>
                );
            break;
    
            case("meat"):
                Ingridents = <div className= {classes.Meat}></div>
            break;
    
            case('cheese'):
                Ingridents = <div className = {classes.Cheese}></div>
            break;
    
            case('salad'):
                Ingridents = <div className = {classes.Salad}></div>
            break;
    
            case('bacon'):
                Ingridents = <div className = {classes.Bacon}></div>
            break;
            
            default:
                Ingridents = null;
        }
    
        return Ingridents;


    }
}

BurgerIngridents.Proptype = {
    type: Proptype.string.isRequired
};

export default BurgerIngridents;

