import { IIngredient } from "../../model/Drink";

export function IngredientListItem({name}: {name: string}) {

  return (
    <p>{name}</p>
  )
}