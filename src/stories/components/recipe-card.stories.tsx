import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { default as RecipeCard } from '../../components/recipe-card/recipe-card.component';

export default {
  title: 'Recipe Card',
  component: RecipeCard,
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    tags: { control: 'object' }
  },
} as ComponentMeta<typeof RecipeCard>;

const Template: ComponentStory<typeof RecipeCard> = (args) => <div style={{ width: '300px' }}><RecipeCard {...args} /></div>;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Example',
  description: 'A great recipe!',
  tags: ['High Fibre', 'Scalable'],
};