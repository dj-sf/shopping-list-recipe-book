import { Component, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})


export class HeaderComponent{
    // @Output() enableRecipeComponent = new EventEmitter();
    // @Output() enableShoppingListComponent = new EventEmitter();
    @Output() featureSelected = new EventEmitter<string>();


    onSelect(feature: string){
        this.featureSelected.emit(feature);
    }

    // onRecipeHeaderClick(): void {
    //     this.enableRecipeComponent.emit("Recipe Component Enabled");
    //     console.log("RecipeComponentEnabled")
    // }

    // onShoppingListHeaderClick(): void {
    //     this.enableRecipeComponent.emit("Shopping List Component Enabled");
    //     console.log("Shopping list component Enabled")
    // }
    

}