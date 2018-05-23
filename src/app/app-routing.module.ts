import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { Recipe } from './recipes/recipe.model';
import { HeaderComponent } from './header/header.component';

const appRoutes: Routes = [
    { path: '', component: HeaderComponent },
    { path: 'recipes', component: RecipesComponent}
]