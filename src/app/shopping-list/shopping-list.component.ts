import { Component, OnInit, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }

  ngOnInit() {
  }
  
  // handleAddListItemToList(addedItem: {nameInput: string, amountInput: number}){ 
  //   let newIngredient = new Ingredient(addedItem.nameInput, addedItem.amountInput);
  //   console.log(newIngredient)
  //   this.ingredients.push(newIngredient);
  // }
  onIngredientAdded(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }

}