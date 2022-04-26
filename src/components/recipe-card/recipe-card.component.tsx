import React from 'react';
import { Card, CardDescription, CardTag, CardTagContainer, CardTitle } from './recipe-card.styles';
 
export interface IRecipeCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  icon?: string;
}
 
const RecipeCard: React.FC<IRecipeCardProps> = ({
  title,
  description,
  image,
  tags,
  icon,
}) => {
  return (
    <Card>
      <CardTitle>{icon && (icon + ' ')}{title}</CardTitle>
      {image && (
        <div style={{ width: '100%', height: '200px' }}>
          <img src={image} style={{ width: '100%', height: '100%'}} />
        </div>
      )}
      <CardDescription>{description}</CardDescription>
      <CardTagContainer>
        {tags.map((tag) => <CardTag>{tag}</CardTag> )}
      </CardTagContainer>
    </Card>
  );
};
 
export default RecipeCard;
