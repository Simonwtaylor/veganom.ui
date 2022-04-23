import React from 'react';
import { Card, CardTag, CardTagContainer, CardTitle } from './recipe-card.styles';
 
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
      <CardTagContainer>
        {tags.map((tag) => <CardTag>{tag}</CardTag> )}
      </CardTagContainer>
    </Card>
  );
};
 
export default RecipeCard;
