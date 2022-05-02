import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RecipeSearch } from '../../components/search';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Components/Recipe Search',
  component: RecipeSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof RecipeSearch>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RecipeSearch> = (args) => <div style={{ width: '600px' }}><RecipeSearch {...args} /></div>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  primary: true,
  label: 'RecipeSearch',
};