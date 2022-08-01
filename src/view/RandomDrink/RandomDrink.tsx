import { useEffect, useState } from "react";
import { DrinkService } from "../../services/DrinkService";
import { AddIngredient } from "../DrinkCreation/AddIngredient";

export function RandomDrink() {
    const [ RandomDrink, setRandomDrink ] = useState()
    useEffect(() => {
        const getResponse = async () => {
          return await DrinkService.getRandomDrink();
        }
    
        getResponse().then(data => setRandomDrink(data)).catch(console.error);
      }, [])
      return (
        <div className="RandomContainer">
          <h3>Try Me</h3>
          <p>{JSON.stringify(RandomDrink)}</p>
        <form>
          <button onClick={RandomDrink}>New Drink</button>
        </form>
        </div>
      )
}