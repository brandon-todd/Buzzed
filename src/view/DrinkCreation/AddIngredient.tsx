import { useEffect, useState } from "react";
import { IIngredient } from "../../model/Drink";
import { DrinkService } from "../../services/DrinkService";
import { RandomDrink } from "../RandomDrink/RandomDrink";
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

  useEffect(() => {
    const getResponse = async () => {
      return await DrinkService.getDrinks();
    }

    getResponse().then(data => setAllDrinks(data)).catch(console.error);
  }, [])

  return (
    <div className="uk-card uk-card-default uk-width-1-2 uk-margin-auto uk-margin-top">
      <div className="uk-card-header">
        <img className="uk-height-small uk-" src={logo}></img>
        <h3 className="uk-card-title">Buzzed</h3>
      </div>
      <title>Buzzed</title>
      <nav>
        <Link to="/">RandomDrink</Link>
      </nav>
      <div className="uk-card-body">
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="text" className="uk-input" placeholder="Add ingredient" onChange={(e) => setIngredient(e.target.value)} />
          <button className="uk-button uk-button-primary uk-align-right uk-margin uk-margin-remove-bottom" onClick={addIngredient}>Add</button>
          <button className="uk-button uk-button-primary uk-align-right uk-margin uk-margin-remove-bottom" onClick={RandomDrink}>Try Me</button>
        </form>
      </div>
      <div className="uk-card-footer">
        {/* <IngredientsList ingredients={listOfIngredients}/> */}
        <p>{JSON.stringify(allDrinks)}</p>
      </div>
    </div>
  )
}
