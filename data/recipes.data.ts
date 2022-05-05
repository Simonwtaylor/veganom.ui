import { IRecipe } from "../src/lib";

export const RECIPES_MOCK: IRecipe[] = [
  {
    id: 1,
    title: 'Cottage Pie',
    description: 'Recipe 1',
    tags: ['High Protein', 'High Fibre'],
    image: 'https://i.pinimg.com/564x/e2/89/13/e28913c2082801c2b2c2ef87d07597fd.jpg',
    kcals: 662,
    costPerPortion: 1.95,
    icon: '🥘',
  },
  {
    id: 2,
    title: 'Mac & Cheese',
    description: 'Recipe 2',
    tags: ['High Protein', 'High Fibre'],
    kcals: 601,
    costPerPortion: 1.76,
    image: '',
    icon: '🥘',
  },
  {
    id: 3,
    title: 'Lasgane',
    description: 'Recipe 3',
    tags: ['High Protein', 'High Fibre'],
    kcals: 716,
    costPerPortion: 1.87,
    image: '',
    icon: '🥘',
  },
  {
    id: 4,
    title: 'Red Lentil Curry',
    description: 'Recipe 4',
    tags: ['Budget Friendly', 'High Fibre'],
    kcals: 512,
    costPerPortion: 1.25,
    image: '',
    icon: '🍛',
  },
]