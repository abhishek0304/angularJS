import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredients.model";


export class ShoppingListService{

    ingredientsChanged = new Subject<Ingredients[]>();
    startedEditing = new Subject<number>();
    private ingredients : Ingredients[] = [new Ingredients('apples',5), new Ingredients('bananas',10)];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    getIngredient(index:number){
        return this.ingredients[index];
    }


    addIngredients(ingredients: Ingredients[]){
        // for(let ing of ingredients){
        //     this.addIngredient(ing);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.next(this.ingredients.slice())
    }

    updateIngredient(index: number, newIngredient: Ingredients){
        this.ingredients[index] = newIngredient;
        this.ingredientsChanged.next(this.ingredients.slice());
    }

    deleteItem(index: number){
        this.ingredients.splice(index,1);
        this.ingredientsChanged.next(this.ingredients.slice());
    }

}