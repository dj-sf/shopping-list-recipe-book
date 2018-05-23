import { Component, OnInit, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";

type listItemType = {nameInput: string, amountInput: string | number};

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() addListItemToList = new EventEmitter<listItemType>();
  @Output() testEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onAddItem(){
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.ingredientAdded.emit(newIngredient);
  }

  // fireTestEvent(): void {
  //   this.testEvent.emit("TEST EVENT FIRED")
  // }

  // onListItemAdd(listItem: listItemType): void {
  //   console.log("onListItemAdd called and this was emitted: ")
  //   console.log(listItem)
  //   console.log("----------------------")
  //   console.log("this is the event that is being called: ") 
  //   console.log (this.addListItemToList)
  //   this.addListItemToList.emit(listItem)
    
  // }

}
