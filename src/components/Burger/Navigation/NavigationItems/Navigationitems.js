import React from 'react'
import NavigationItem from './NavigationItem/NavigationItem'
import NavigationItemsCss from './NavigationItems.css'

const  Navigationitems = ()=>{
    return (
          <ul className={NavigationItemsCss.NavigationItems}>
           <NavigationItem link="/" active >Burger Builder</NavigationItem>
           <NavigationItem link="/">Check Out</NavigationItem>
          </ul>
    );
}

export default Navigationitems
