import { Component,  OnDestroy,  OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f',{static:false}) slform!: NgForm;
  subscription!: Subscription;
  editMode = false;
  editedIndexNumber!:number;
  editedItem!: Ingredients;
  
  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(){
    //alert("123")
    this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index:number)=>{
        //console.log("123456")
        this.editedIndexNumber = index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngredient(index);
        this.slform.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        })
      }
    );
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm){
  const value = form.value;
  const newIngredient = new Ingredients(value.name,value.amount);
  if(this.editMode){
    this.shoppingListService.updateIngredient(this.editedIndexNumber,newIngredient);
  }
  else{
    this.shoppingListService.addIngredient(newIngredient);
  }
  this.editMode = false;
  form.reset();
  
  } 

  onClear(){
    this.slform.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppingListService.deleteItem(this.editedIndexNumber);
    this.onClear();
  }
}
