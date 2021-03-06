import {  Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Ingredients } from "../shared/ingredients.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeChanged = new Subject<Recipe[]>();
    


    private recipes : Recipe[] = [ 
        new Recipe('Pizza', 'Farmhouse Pizza','https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg'
        ,[new Ingredients('Carrot',1),
          new Ingredients('Spinach',2)]),
        new Recipe('Pasta', 'Macroni Pasta','https://thumbs.dreamstime.com/z/gourmet-tasty-italian-penne-pasta-plate-close-up-spicy-tomato-herbs-white-served-top-wooden-table-58667798.jpg',
        [new Ingredients('Meat',3),
         new Ingredients('Penne pasta',10)])
      ];

    constructor(private shoppinglistservice: ShoppingListService){}

    getReciped(){
        return this.recipes.slice();
    }

    addIngredientToShoppingList(ingredients: Ingredients[]){
        this.shoppinglistservice.addIngredients(ingredients);
    }

    getRecipe(index: number){
        console.log("hi");
        return this.recipes[index];
    }

    addRecipe(recipe: Recipe){
        this.recipes.push(recipe);
        this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index:number, recipe: Recipe){
        this.recipes[index] = recipe;
        this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number){
        this.recipes.splice(index,1);
        this.recipeChanged.next(this.recipes.slice());
    }

}