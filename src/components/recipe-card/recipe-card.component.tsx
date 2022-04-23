import React from 'react';
import { Card, CardTag, CardTitle } from './recipe-card.styles';
 
export interface IRecipeCardProps {
  title: string;
  description: string;
  tags: string[];
}
 
const RecipeCard: React.FC<IRecipeCardProps> = ({
  title,
  description,
  tags,
}) => {
  return (
    <Card>
      <CardTitle>{title}</CardTitle>
      <p>{description}</p>
      <div>
        {tags.map((tag) => <CardTag>{tag}</CardTag> )}
      </div>
    </Card>
  );
};
 
export default RecipeCard;
