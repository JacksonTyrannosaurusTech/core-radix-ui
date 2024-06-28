import type { Meta, StoryObj } from '@storybook/react';

import LocationForm from '../../pages/LocationForm';

//👇 This default export determines where your story goes in the story list
const meta: Meta<typeof LocationForm> = {
  title: "Pages",
  component: LocationForm,
};

export default meta;
type Story = StoryObj<typeof LocationForm>;

export const _LocationForm: Story = {
  args: {
    onSkip: () => { },
    onBack: () => { },
    onNext: (data, e) => {
      e?.preventDefault()
      console.log({ data })
    },
  },
};