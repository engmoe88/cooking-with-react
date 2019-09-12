import React from 'react';
import Ingredient from './Ingredient'

// Both implementations below are fine.


// export default function IngredientsList({ ingredients }) {
//     const ingredientElements = ingredients.map(ingredient => {
//         return  <Ingredient key={ingredient.id} {...ingredient} /> 
//     })
//     return (
//         <div>
//            { ingredientElements } 
//         </div>
//     );
// };
export default function IngredientsList({ ingredients }) {
    return (
        <div className='ingredient-grid'>
           { 
               ingredients.map(
                   ingredient => {
                       return <Ingredient key={ingredient.id} 
                       {...ingredient} />
                   }
               )
           } 
        </div>
    );
};
