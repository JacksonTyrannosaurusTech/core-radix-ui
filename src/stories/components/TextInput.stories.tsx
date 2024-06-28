import type { Meta, StoryObj } from '@storybook/react';
import TextInput from '../../components/TextInput';
import { BeakerIcon } from '@heroicons/react/24/solid'

const meta: Meta<typeof TextInput> = {
  title: "Inputs/TextInput",
  component: TextInput,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: "Label",
    placeholder: "Text Input"
  }
}

export default meta;
type Story = StoryObj<typeof TextInput>

export const _TextInput: Story = {}

export const _PrependIconTextInput: Story = {
  args: {
    prependItem: <BeakerIcon className="w-6 text-slate-600" />,
  },
}

export const _AppendIconTextInput: Story = {
  args: {
    appendItem: <BeakerIcon className="w-6 text-slate-600" />,
  },
}