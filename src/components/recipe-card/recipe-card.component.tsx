import React from 'react';
import { Card } from './recipe-card.styles';
 
export interface IRecipeCardProps {

}
 
const RecipeCard: React.FC<IRecipeCardProps> = () => {
  return (
    <Card>
      Hello World  
    </Card>
  );
};
 
export default RecipeCard;
