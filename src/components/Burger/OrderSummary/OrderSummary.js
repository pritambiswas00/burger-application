import React from 'react'
import Aux from '../../../HOC/Aux'
import OrderSummaryCss from './OrderSummary.css'
import Button from '../../UI/Button/Button'

const OrderSummary = (props)=>{
    const addedIngredients = Object.keys(props.ingredients).map(label=>{
        return <li key={label}><span style={{textTransform: "capitalize"}}>{label}</span>: {props.ingredients[label]}</li>
    })
    return (
        <Aux>
            <h4>Your Order Summary : </h4>
            <ul className={OrderSummaryCss.Ul}>{addedIngredients}
            </ul>
            <p className={OrderSummaryCss.Paragraph}>Do you want to checkout?</p>
            <p><strong>Total Price: {props.totalPrices.toFixed(2)}$</strong></p>
            <Button btnType="Danger" clicked={props.cancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.continue}>CONTINUE</Button>

             
        </Aux>

    );

}

export default OrderSummary;