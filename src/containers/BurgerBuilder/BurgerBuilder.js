import React, { Component } from 'react'
import Aux from '../../hoc/Aux'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

const IngredientCosts = {
    salad : 0.4,
    bacon : 1.2,
    cheese : 0.4,
    meat : 1.4
}


class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        cost: 7,
        purchasable : false,
        purchasing : false
    }

    updatePurchasable (updateIngredients) {
        const ingredients = {...updateIngredients};
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum,el) => sum+el,0);
        this.setState({purchasable: sum > 0});
    }

    IngredientAdded = (type) => {
        const OldCount = this.state.ingredients[type];
        const UpdatedCount = OldCount + 1 ;

        const updatedIngredient = { ...this.state.ingredients}
        updatedIngredient[type] = UpdatedCount;

        const Oldcost = this.state.cost;
        const NewCost = Oldcost + IngredientCosts[type];

        this.setState({ cost: NewCost , ingredients: updatedIngredient });
        this.updatePurchasable(updatedIngredient);
    }

    IngredientReduced = (type) => {
        console.log(type);
        const OldCount = this.state.ingredients[type];
        if(OldCount > 0)     
        {   
            const UpdatedCount = OldCount-1;

            const updatedIngredient = { ...this.state.ingredients}
            updatedIngredient[type] = UpdatedCount;

            const Oldcost = this.state.cost;
            const NewCost = Oldcost - IngredientCosts[type];

            this.setState({ cost: NewCost, ingredients: updatedIngredient });
            this.updatePurchasable(updatedIngredient);
        }
    }

    orderHandeller = () => {
        this.setState({purchasing: true});
    }

    orderCancelleHandeller = () => {
        this.setState({purchasing: false});
    }

    render()
    {
        const disableInfo_less = { ...this.state.ingredients};
        const disableInfo_more = { ...this.state.ingredients};
        
        for(let key in disableInfo_less ) {
            disableInfo_less[key] = disableInfo_less[key] <= 0 ;       
        }

        for(let key in disableInfo_more ) {
            disableInfo_more[key] = disableInfo_more[key] >= 3 ;       
        }


        return (
            <Aux>
                <Modal show = {this.state.purchasing} modalClosed = {this.orderCancelleHandeller}>
                    <OrderSummary ingredients = {this.state.ingredients}/>
                </Modal>
                <Burger 
                    ingredients = {this.state.ingredients}
                    />
                <BurgerControls 
                    More = {this.IngredientAdded}
                    Less = {this.IngredientReduced}
                    disableInfo_less = {disableInfo_less}
                    disableInfo_more = {disableInfo_more}
                    price = {this.state.cost}
                    ordered = {this.orderHandeller}
                    purchasable = {this.state.purchasable}
                    />
            </Aux>
        );

    }
}

export default BurgerBuilder;