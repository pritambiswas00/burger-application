import React from 'react'

import BurgerControlCss from './BurgerControl.css';

const BurgerControl = (props)=>{
    return (
        <div className={BurgerControlCss.BurgerControl}>
            <div className={BurgerControlCss.Label}>{props.label}</div>
            <button onClick={props.removed} className={BurgerControlCss.Less} disabled={props.disabled}>Less</button>
            <button onClick={props.added} className={BurgerControlCss.More}>More</button>

        </div>
    )
}

export default BurgerControl
