import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(private slService: ShoppingListService){}

  public recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('A test Recipe',
      'somente um teste',
      'https://realfood.tesco.com/media/images/Ritas-enchiladas-recipe-1400x919-1c7ff22b-ea5e-44cf-9ada-d7b04420002f-0-1400x919.jpg',
      [
        new Ingredient('teste1', 1),
        new Ingredient('teste2', 2),
        new Ingredient('teste3', 3),
      ]),
  ];

  getRecipes() {
    return this.recipes.slice(); //slice faz retornar somente uma copia do array e não o array principal
  }

  addIngredientToSL(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }

}
