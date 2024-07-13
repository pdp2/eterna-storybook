import type { Meta, StoryObj } from '@storybook/react';
import AppHeader from './AppHeader';


const meta: Meta<typeof AppHeader> = {
  title: 'Eterna/Header',
  component: AppHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
