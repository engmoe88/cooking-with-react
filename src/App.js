import React from 'react';
import RecipeList from './RecipeList'

function App() {
  
  return (
    <RecipeList recipes={sampleRecipes} />
  );
  
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    cookTime: '1:45',
    servings: 3,
    instructions: '1- Put Salt on Chicken \n2- Put chicken in oven \n3- Eat chicken'
  },
  {
    id: 2,
    name: 'Plain Beef',
    cookTime: '0:45',
    servings: 5,
    instructions: '1- Put paprika on beef \n2- Put beef in oven \n3- Eat beef'
  }
];

export default App;
