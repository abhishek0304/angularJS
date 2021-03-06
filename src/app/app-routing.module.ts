import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';

const approutes: Routes = [
  { path : '' , redirectTo : '/recipes', pathMatch : 'full'},
  { path : 'recipes' , component : RecipesComponent , children : [
    { path : '' , component : RecipeStartComponent},
    { path : 'new' , component : RecipeEditComponent},
    { path : ':id' , component : RecipeDetailComponent},
    { path : ':id/edit' , component : RecipeEditComponent}
  ]},
  { path : 'shopping-list' , component : ShoppingListComponent }
  ,{ path : '**' , component : NotfoundpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(approutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
