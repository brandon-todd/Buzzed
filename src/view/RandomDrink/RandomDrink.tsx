import { useEffect, useState } from "react";
import { DrinkService } from "../../services/DrinkService";
import { AddIngredient } from "../DrinkCreation/AddIngredient";

export function RandomDrink() {
  const [randomDrink, setRandomDrink] = useState()

  useEffect(() => {
    getRandomDrink().then(data => setRandomDrink(data)).catch(console.error);
  }, [])

  const getRandomDrink = async () => {
    return await DrinkService.getRandomDrink();
  }

  return (
    <div className="RandomContainer">
      <h3>Try Me</h3>
      <p>{JSON.stringify(randomDrink)}</p>
      <form>
        <button onClick={() => getRandomDrink().then(data => setRandomDrink(data)).catch(console.error)}>New Drink</button>
      </form>
    </div>
  )
}