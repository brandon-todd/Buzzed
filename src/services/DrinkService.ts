
export class DrinkService {
  public static async getDrinks() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list');
    return await response.json();
  }
  public static async getRandomDrink() {
    const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    return await response.json();
  }
}