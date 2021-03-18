import React from 'react'
import BurgerControl from './BurgerControl/BurgerControl'

import BurgerControlsCSS from './BurgerControls.css'



const defaultControls = [
    {label: 'Salad', type:'salad'},
    {label: 'Cheese', type:'cheese'},
    {label: 'Meat', type:'meat'},
    {label: 'Bacon', type:'bacon'}
]

const BurgerControls= (props)=> {
    return (
        
        <div className={BurgerControlsCSS.BurgerControls}>
            <p>Total Price: <strong>{(props.price).toFixed(2)}</strong></p>
            {defaultControls.map(ctrl => (
                <BurgerControl key={ctrl.label} label={ctrl.label} added={(e)=>props.ingredientsAdded(ctrl.type)} removed={(e)=>props.ingredientsRemoved(ctrl.type)}
                disabled={props.infoDissabled[ctrl.type]} />
            ))} 
            <button onClick={props.ordered} disabled={!props.purchasable} className={BurgerControlsCSS.OrderButton}>Order Now!</button>
        </div>
    )
}

export default BurgerControls
