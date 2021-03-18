import React from 'react'
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems/Navigationitems'
import SideDrawerCss from './SideDrawer.css'
const  SideDrawer = ()=>{
    return (
        <div className={SideDrawerCss.SideDrawer}>
            <Logo/>
            <nav>
            <NavigationItems/>
            </nav>
            
        </div>
    )
}

export default SideDrawer
