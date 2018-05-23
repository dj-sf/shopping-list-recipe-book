import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  loadedFeature = 'recipes';

  // @Input() recipesView = false;
  // @Input() shoppingListView = true;

  onNavigate(feature: string){
    console.log('onNavigate called')
    this.loadedFeature = feature;
  }

  // makeRecipesComponentVisible(event): void {
  //   console.log("makeRecipesComponentVisible reached: " + event)
  //   this.recipesView === true ? this.recipesView = false : this.recipesView = true;
  // }

  // makeShoppingListComponentVisible(event): void {
  //   console.log("makeShoppingListComponentVisible reached: " + event)
  //   this.shoppingListView === true? this.shoppingListView = false : this.shoppingListView = true;
  // }
}
