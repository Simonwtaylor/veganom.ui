import React from "react";
import {
  Card,
  CardDescription,
  CardSection,
  CardSectionItem,
  CardTag,
  CardTagContainer,
  CardTitle,
  SectionTitle,
  SectionValue,
} from "./recipe-card.styles";

export interface IRecipeCardProps {
  id: number;
  title: string;
  description: string;
  image?: string;
  tags: string[];
  icon?: string;
  kcals: number;
  costPerPortion: number;
  onCardClick: (id: number) => void;
}

const RecipeCard: React.FC<IRecipeCardProps> = ({
  id,
  title,
  description,
  image,
  tags,
  icon,
  kcals,
  costPerPortion,
  onCardClick,
}) => {
  const handleClick = () => {
    onCardClick(id);
  };

  return (
    <Card onClick={handleClick}>
      {image && (
        <div style={{ width: "100%", height: "200px" }}>
          <img src={image} style={{ width: "100%", height: "100%" }} />
        </div>
      )}
      <CardTitle>
        {icon && icon + " "}
        {title}
      </CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardSection>
        <CardSectionItem>
          <SectionTitle>kcals:</SectionTitle>
          <SectionValue>{kcals}</SectionValue>
        </CardSectionItem>
        <CardSectionItem>
          <SectionTitle>Cost:</SectionTitle>
          <SectionValue>£{costPerPortion}</SectionValue>
        </CardSectionItem>
      </CardSection>
      <CardTagContainer>
        {tags.map((tag, i) => (
          <CardTag key={`recipecardtag${i}`}>{tag}</CardTag>
        ))}
      </CardTagContainer>
    </Card>
  );
};

export default RecipeCard;
