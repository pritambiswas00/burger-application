/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
import React from 'react'
import BurgerCSS from './Burger.css'
import BurgerIngredients from './BurgerIngredients/BurgerIngredients'

const  Burger= (props)=>{

  let transferIngredients = Object.keys(props.ingredients).map( per=>{
       return [...Array(props.ingredients[per])].map((_,i)=>{
         return <BurgerIngredients key={per+i} type={per}/>
       });
  }).reduce((accumulator, currentValue)=>{
       return accumulator.concat(currentValue)
  }, []);
    
       if(transferIngredients.length === 0){
                 transferIngredients = <p>Please Add Something in your Burger</p>
       }


    return (
        <div className={BurgerCSS.Burger}>
          <BurgerIngredients type='bread-top'/>
           {transferIngredients}
          <BurgerIngredients type='bread-buttom'/>
        </div>
    )
}

export default Burger
