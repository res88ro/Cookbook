import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  constructor() { }

  //Am creat un array recipes, caruia i-am atribuit Recipe importat mai sus
  recipes: Recipe[] = [
    new Recipe('A test Recipe','This is simply a test','https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?webp=true&quality=90&resize=620%2C563')
  
    ];

  ngOnInit(): void {
  }

}
