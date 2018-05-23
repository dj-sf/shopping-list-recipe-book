import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'

@Component({
    selector: 'app-recipe-entry',
    templateUrl: './recipe-entry.component.html',
    styleUrls: ['./recipe-entry.component.css']
})

export class RecipeEntryComponent implements OnInit {
    @Input() recipe: Recipe;
    @Output() recipeSelected = new EventEmitter<void>();

    // @Input() name: string;
    // @Input() description: string;
    // @Input() imagePath: string;
    constructor(){
        
    }

    ngOnInit(){

    }

    onSelected(){
        this.recipeSelected.emit();
    }

}