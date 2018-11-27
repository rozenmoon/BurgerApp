import React, {Component} from 'react'
import Aux from '../../hoc/Aux'
import classes from './Layout.css'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import Sidedrawer from '../Navigation/Sidedrawer/Sidedrawer'

class Layout extends Component{
    state ={
        showSideDrawer: false
    };

    sideDrawerClosedHandeller = () => {
        this.setState({showSideDrawer: false});
    };

    sideDrawerToggleHandeller = () => {
        this.setState( (prevState) =>  { return {showSideDrawer: !prevState.showSideDrawer};
        });
    };

    render(){
        return(
            <Aux>   
                <Toolbar toggleSideDrawer = {this.sideDrawerToggleHandeller}/>
                <Sidedrawer open= {this.state.showSideDrawer} closed= {this.sideDrawerClosedHandeller}/>
                <main className = {classes.Content } >
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;