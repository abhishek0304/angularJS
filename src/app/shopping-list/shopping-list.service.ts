import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService{

    ingredientsChanged = new EventEmitter<Ingredients[]>();

    private ingredients : Ingredients[] = [new Ingredients('apples',5), new Ingredients('bananas',10)];

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredients){
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.ingredients.slice());
    }


    addIngredients(ingredients: Ingredients[]){
        // for(let ing of ingredients){
        //     this.addIngredient(ing);
        // }
        this.ingredients.push(...ingredients);
        this.ingredientsChanged.emit(this.ingredients.slice())
    }

}