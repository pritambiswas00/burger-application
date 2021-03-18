import React from 'react'
import Aux from '../../HOC/Aux'
import Layout from './layout.css'
import Toolbar from '../Burger/Navigation/Toolbar/Toolbar'
import SideDrawer from '../Burger/Navigation/Sidedrawer/SideDrawer'

const layout = (props)=>{
    return(
        <Aux>
         <Toolbar/>
         <SideDrawer/>
         <main className={Layout.content}>
         {props.children}
         </main>
        </Aux>

    );
}
export default layout;