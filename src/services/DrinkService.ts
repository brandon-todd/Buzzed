import { Drink } from "../model/Drink";

export class DrinkService {
  public static async getDrinks(ing: string) {
    let url: string = 'https://www.thecocktaildb.com/api/json/v1/1/filter.php?i='+ing
    console.log(url)
    const response = await fetch(url);
    return await response.json();
  }
  public static async getRandomDrink() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    return await response.json() as Drink;
  }
}
