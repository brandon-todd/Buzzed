import { useEffect, useState } from "react";
import { DrinkService } from "../../services/DrinkService";
import { Drink } from '../../model/Drink';

export function RandomDrink() {
  const [randomDrink, setRandomDrink] = useState<Drink>();

  useEffect(() => {
    getRandomDrink().then(data => { setRandomDrink(data) }).catch(console.error);
  }, [])

  const getRandomDrink = async () => {
    return await DrinkService.getRandomDrink();
  }

  return (
    <div className="RandomContainer">
      <h3>Try Me</h3>
      <p>{randomDrink?.drinks[0].strDrink}</p>
      <form>
        <button onClick={() => getRandomDrink().then(data => setRandomDrink(data)).catch(console.error)}>New Drink</button>
      </form>
    </div>
  )
}