import type { Meta, StoryObj } from '@storybook/react';
import { ProgressItem } from '../../components/Progress';

const meta: Meta = {
  title: "Inputs/Progress",
  component: ProgressItem,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    isActive: false,
    isComplete: false,
    step: 1,
  }
};
 
export default meta;
type Story = StoryObj;
 
export const _ProgressItem: Story = {
  args: {
    isActive: false
  }
};