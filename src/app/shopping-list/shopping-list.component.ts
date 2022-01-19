import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients! : Ingredients[];
  private igChangeSub!: Subscription;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientsChanged
    .subscribe((ingredients: Ingredients[])=>
    {
      this.ingredients=ingredients;
    });
  }

  ngOnDestroy(): void {
      this.igChangeSub.unsubscribe();
  }

  onEditItems(index: number){
    this.shoppingListService.startedEditing.next(index);
  }

}
