import React, {Component} from 'react'
import Aux from '../../HOC/Aux'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'



const INGREDIENTS_PRICES = {
    salad: 0.5,
    cheese: 1,
    meat: 1.5,
    bacon: 1
}

class BurgerBuilder extends Component {
   state={
       ingredients:{
           salad:0,
           cheese:0,
           meat: 0,
           bacon: 0

       },
       totalPrices: 0,
       purchaseOption: false,
       purchased: false,
   }
   updatePurchaseOption = (ingredients)=> {


    const totalSum = Object.keys(ingredients).map(key=>{
        return ingredients[key]
    }).reduce((sum, el)=>{
           return sum+el;
    }, 0)
    this.setState({
        purchaseOption: totalSum > 0 ? true : false
    });
}



   addHandler = (type)=>{
       const oldIngredient = this.state.ingredients[type];
       const mewIngredient = oldIngredient + 1;
       const newIngredients = {
              ...this.state.ingredients
       };
       newIngredients[type] = mewIngredient;
       const priceAdd= INGREDIENTS_PRICES[type];
       const oldPrice  = this.state.totalPrices;
       const newPrice = oldPrice+ priceAdd;
       this.setState({
           ingredients: newIngredients,
           totalPrices: newPrice
       });
       this.updatePurchaseOption(newIngredients);

       
   }

   removeHandler = (type)=>{
    const oldIngredient = this.state.ingredients[type];
    if(oldIngredient <= 0){
        return;
    }
    const mewIngredient = oldIngredient - 1;
    const newIngredients = {
        ...this.state.ingredients
 };
    newIngredients[type] = mewIngredient;
        const priceSub = INGREDIENTS_PRICES[type];
        const oldPrices = this.state.totalPrices;
        const priceSubstract = oldPrices - priceSub;
        this.setState({
            ingredients: newIngredients,
            totalPrices: priceSubstract
        });
        this.updatePurchaseOption(newIngredients);
    
   };
   purchaseHandle = ()=>{
          this.setState({purchased: true});
   }
   closePurchase = ()=>{
       this.setState({purchased: false})
   }
   continuePurchase= ()=>{
       alert('Okay! let me process this for you.');
   }


    render() {
        const checkValue = {
            ...this.state.ingredients
        };
        for(let i in checkValue){
            checkValue[i] = checkValue[i] <=0
        }
        return (
            <Aux>
                <Modal show={this.state.purchased} cancelModal={this.closePurchase}>
                   <OrderSummary ingredients={this.state.ingredients} totalPrices={this.state.totalPrices} cancel={this.closePurchase} continue={this.continuePurchase}/>
                </Modal>
               <Burger ingredients={this.state.ingredients}/>
               <BurgerControls ingredientsAdded={this.addHandler} ingredientsRemoved={this.removeHandler}
               infoDissabled={checkValue} price={this.state.totalPrices}
               purchasable = {this.updatePurchaseOption}
               ordered={this.purchaseHandle}/>
                
            </Aux>

        );
    }

}

export default BurgerBuilder;