import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import '../css/app.css';
import uuidv4 from 'uuid/v4';
import RecipeEdit from './RecipeEdit';

export const RecipeContext = React.createContext()
const LOCAL_STORAGE_KEY = 'cookingWithReact.recipes'

function App() {
  const [recipes, setRecipes] = useState(sampleRecipes)
  const recipeContextValue = {
    handleRecipeAdd,
    handleRecipeDelete
  }

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      cookTime: '1:00',
      servings: 1,
      instructions: 'Instr.',
      ingredients: [
        { id: uuidv4(), name: 'Name', amount: '1 Tbs' }
      ]
    }
    setRecipes([...recipes, newRecipe])
  }
  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe => recipe.id !== id))
  }
  // this makes sure the app saves its data and persists
  useEffect(() => {
    const recipeJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (recipeJSON != null) setRecipes(JSON.parse(recipeJSON))
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(recipes))
  }, [recipes])
  
  
  return (
    <RecipeContext.Provider value={recipeContextValue}>
      <RecipeList recipes={recipes} />
      <RecipeEdit />
    </RecipeContext.Provider>
  );
  
}


const sampleRecipes = [
  {
    id: uuidv4(),
    name: 'Plain Chicken',
    cookTime: '1:45',
    servings: 3,
    instructions: '1- Put Salt on Chicken \n2- Put chicken in oven \n3- Eat chicken',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Chicken',
        amount: '2 Pounds'
      },
      {
        id: uuidv4(),
        name: 'Salt',
        amount: '1 Tbs'
      }
    ]
  },
  {
    id: uuidv4(),
    name: 'Plain Beef',
    cookTime: '0:45',
    servings: 5,
    instructions: '1- Put paprika on beef \n2- Put beef in oven \n3- Eat beef',
    ingredients: [
      {
        id: uuidv4(),
        name: 'Beef',
        amount: '3 Pounds'
      },
      {
        id: uuidv4(),
        name: 'Paprika',
        amount: '2 Tbs'
      }
    ]
  }
];

export default App;
