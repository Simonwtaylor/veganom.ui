import React from 'react';
import { Search, TextInput } from './search.styles';
 
export interface IRecipeSearchProps {
  onSearchType: (search: string) => void;
}
 
const RecipeSearch: React.FC<IRecipeSearchProps> = ({
  onSearchType,
}) => {
  return (
    <Search>
      <TextInput
        placeholder={'🔎 Search for 🥦 plant-based recipes by tags or name'}
        onChange={({ currentTarget: { value } }) => onSearchType(value)}
      />
    </Search>
  );
};
 
export default RecipeSearch;