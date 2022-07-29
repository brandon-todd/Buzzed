import { IIngredient } from "../../model/Drink";
import { IngredientListItem } from "./IngredientListItem";

export function IngredientsList({ ingredients }: { ingredients: IIngredient[] }) {

  return (
    <>
    {ingredients.forEach((ingredient) => {
        <IngredientListItem name={ingredient.name} />
      })
    }
    </>
  )
}