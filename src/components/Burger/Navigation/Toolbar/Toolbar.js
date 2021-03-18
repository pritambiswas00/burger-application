 import React from 'react'
import ToolbarCss from './Toolbar.css';
import Logo from '../../../Logo/Logo'
import NavigationItems from '../NavigationItems/Navigationitems'

 const Toolbar = (props)=>(
        <header className={ToolbarCss.Toolbar}>
            <div>MENU</div>
            <Logo/>
            <nav>
               <NavigationItems/>
            </nav>
        </header>
 );


 export default Toolbar;

 