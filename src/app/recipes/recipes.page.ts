import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
    { id: 'r1',
    title: 'Schnitzel',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Breitenlesau_Krug_Br%C3%A4u_Schnitzel.JPG',
    ingredients: ['french fries', 'pork meat', 'Salad']
  },
  { id: 'r2',
  title: 'Spaghetti',
  imageUrl: 'https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg',
  ingredients: ['Spaghetti', 'meat', 'tomatos']
}
  ];

  constructor() { }

  ngOnInit() {
  }

}
