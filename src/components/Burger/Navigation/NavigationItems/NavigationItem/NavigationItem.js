import React from 'react'
import NavigationItemCss from './NavigationItem.css'

const  NavigationItem = (props)=>{
    return (
          <li className={NavigationItemCss.NavigationItem}>
              <a href={props.link} className={props.active ? NavigationItemCss.active : null}>{props.children}</a>
          </li>
    );
}

export default NavigationItem
