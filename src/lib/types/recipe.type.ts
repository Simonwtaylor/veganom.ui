export interface IRecipe {
  id: number;
  title: string;
  description: string;
  tags: string[];
  kcals: number;
  costPerPortion: number;
  image?: string;
  icon?: string;
}
