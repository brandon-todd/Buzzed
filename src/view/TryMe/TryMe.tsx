import { useEffect, useState } from "react";
import { DrinkService } from "../../services/DrinkService";
import { Drink } from '../../model/Drink';

export function RandomDrink() {
  const [randomDrink, setRandomDrink] = useState<Drink>();

  useEffect(() => {
    getRandomDrink().then(data => { setRandomDrink(data) }).catch(console.error);
    console.log(randomDrink)
  }, [])

  const getRandomDrink = async () => {
    return await DrinkService.getRandomDrink();
  }

  return (
    <div className="uk-card uk-card-default uk-card-hover uk-width-4-5 uk-margin-auto uk-margin-top">
      <div className="uk-card-header">
        <h2 className="uk-card-title">Try Me</h2>
      </div>
      <div className="uk-card-body">
        <h3 className="uk-text-center">{randomDrink?.drinks[0].strDrink}</h3>
        <body className="uk-text-light uk-text-center">Type of drink: {randomDrink?.drinks[0].strCategory}</body>
        <div data-src={randomDrink?.drinks[0].strImageSource} uk-img></div>
        <h3 className="uk-text-lighter">Ingredients: \n</h3>
        <li>{randomDrink?.drinks[0].strIngredient1}</li>
        <li>{randomDrink?.drinks[0].strIngredient2}</li>
        <li>{randomDrink?.drinks[0].strIngredient3}</li>
        <li>{randomDrink?.drinks[0].strIngredient4}</li>
        <li>{randomDrink?.drinks[0].strIngredient5}</li>
        <li>{randomDrink?.drinks[0].strIngredient6}</li>
        <li>{randomDrink?.drinks[0].strIngredient1}</li>
        <li>{randomDrink?.drinks[0].strIngredient1}</li>
        <li>{randomDrink?.drinks[0].strIngredient1}</li>
        <li>{randomDrink?.drinks[0].strIngredient1}</li>
        <li>{randomDrink?.drinks[0].strIngredient1}</li>
        <li>{randomDrink?.drinks[0].strIngredient1}</li>
        <li>{randomDrink?.drinks[0].strIngredient1}</li>
        <li>{randomDrink?.drinks[0].strIngredient1}</li>
      </div>
      <form className="uk-padding uk-text-center">
        <button className="uk-button uk-button-secondary" onClick={() => getRandomDrink().then(data => setRandomDrink(data)).catch(console.error)}>New Drink</button>
      </form>
    </div>
  )
}