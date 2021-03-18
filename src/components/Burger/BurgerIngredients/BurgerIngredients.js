import React from 'react'
import BurgerCSS from './BurgerIngredient.css'
import PropTypes from 'prop-types'

const  BurgerIngredients = (props)=>{
    let ingredients = null;
    switch(props.type){
        case ('bread-buttom') :
        ingredients = <div className={BurgerCSS.BreadBottom}></div>;
        break;
        case ('bread-top') :
            ingredients = (
                <div className={BurgerCSS.BreadTop}>
                    <div className={BurgerCSS.Seeds1}></div>
                  <div className={BurgerCSS.Seeds2}></div>
                </div>
            );
            break;
        case 'meat':
        ingredients = <div className={BurgerCSS.Meat}></div>;
        break;
        case ('cheese') :
        ingredients = <div className={BurgerCSS.Cheese}></div>;
         break;
        case ('salad') :
        ingredients = <div className={BurgerCSS.Salad}></div>;
         break;
        case ('bacon'): 
        ingredients = <div className={BurgerCSS.Bacon}></div>
        break;
        default :

         ingredients = null;
         break;

    }
    return ingredients;
}
BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
};


export default BurgerIngredients
