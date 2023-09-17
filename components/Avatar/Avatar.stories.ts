import { Meta, StoryObj } from "@storybook/react"

import Avatar, { type AvatarProps } from './Avatar'

const meta: Meta<AvatarProps> = {
  title: "Atoms/Avatar",
  component: Avatar,
  argTypes: {
    size: { type: 'string' },
    className: { type: 'string' }
  },
};

export default meta;

export const Primary: StoryObj<AvatarProps> = {
  args: {},
};

export const AvatarImage: StoryObj<AvatarProps> = {
  args: {
    size: 'lg',
    image: 'https://placehold.co/400x400.png'
  },
};
