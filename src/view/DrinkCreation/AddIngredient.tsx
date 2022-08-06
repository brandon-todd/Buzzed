import { useEffect, useState, useRef } from "react";
import { IIngredient } from "../../model/Drink";
import { DrinkService } from "../../services/DrinkService";
import { RandomDrink } from "../TryMe/TryMe";
import { IngredientListItem } from "./IngredientListItem";
import { IngredientsList } from "./IngredientsList";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";


export function AddIngredient() {
  const [listOfIngredients, addNewIngredient] = useState<IIngredient[]>([]);
  const [ingredient, setIngredient] = useState<string>('');
  const [allDrinks, setAllDrinks] = useState<any>('');

  const addIngredient = () => {
    addNewIngredient(list => [...list, { name: ingredient }]);
    console.log(listOfIngredients);
  }



  async function filterAPI(){
    const lst = document.getElementById("ingredients")?.innerHTML 
    console.log(lst)
    //if(lst !== undefined){
      let ing: string = lst.toString()
      console.log(ing)
      return await DrinkService.getDrinks(ing)
    //}
  }
  useEffect(() => {
    const getResponse = async ()=> {
      return await filterAPI()
    }
    getResponse().then(data => setAllDrinks(data)).catch(console.error);
  },[])
  const getFirstTwoNumbers = () => {
    return [1, 2]
  }

  const [num1, num2] = getFirstTwoNumbers();
 /*
  useEffect(() => {
    const getResponse = async () => {
      return await DrinkService.getDrinks();
    }

    getResponse().then(data => setAllDrinks(data)).catch(console.error);
  }, [])*/

  return (
    <>
    <div className="uk-card uk-card-default uk-width-1-2 uk-margin-auto uk-margin-top">
      <div className="uk-card-body">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" className="uk-input" placeholder="Add ingredient" onChange={(e) => setIngredient(e.target.value)} />
          <button className="uk-button uk-button-primary uk-align-center uk-margin uk-margin-remove-bottom" onClick={addIngredient}>Add</button>
        </form>
      </div>
      <div className="uk-card-footer">
        {<IngredientsList ingredients={listOfIngredients}/>}
        <p id = "ingredients">Gin</p>
        <p>{/*JSON.stringify(allDrinks)*/}</p>
      </div>
      <div className="uk-card-footer">
        <p>Your Drinks: </p>
        <br></br>
        <p>{JSON.stringify(allDrinks)}</p>
        <button className="uk-button uk-button-primary uk-align-center uk-margin uk-margin-remove-bottom" onClick={filterAPI}>GetDrink!</button>
      </div>
    </div>
    </>
  )
}