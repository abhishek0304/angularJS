import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [ 
    new Recipe('Pizza', 'Farmhouse','https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg'),
    new Recipe('Pasta', 'Macroni','https://thumbs.dreamstime.com/z/gourmet-tasty-italian-penne-pasta-plate-close-up-spicy-tomato-herbs-white-served-top-wooden-table-58667798.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
