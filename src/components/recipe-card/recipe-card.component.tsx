import React from 'react';
import { Card, CardDescription, CardTag, CardTagContainer, CardTitle } from './recipe-card.styles';
 
export interface IRecipeCardProps {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  icon?: string;
  onCardClick: (id: number) => void;
}
 
const RecipeCard: React.FC<IRecipeCardProps> = ({
  id,
  title,
  description,
  image,
  tags,
  icon,
  onCardClick,
}) => {
  const handleClick = () => {
    onCardClick(id);
  };

  return (
    <Card
      onClick={handleClick}
    >
      {image && (
        <div style={{ width: '100%', height: '200px' }}>
          <img src={image} style={{ width: '100%', height: '100%'}} />
        </div>
      )}
      <CardTitle>{icon && (icon + ' ')}{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardTagContainer>
        {tags.map((tag, i) => <CardTag key={`recipecardtag${i}`}>{tag}</CardTag> )}
      </CardTagContainer>
    </Card>
  );
};
 
export default RecipeCard;
