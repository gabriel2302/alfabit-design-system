import { Meta, StoryObj } from "@storybook/react"

import Notice, { type NoticeProps } from './Notice'

const meta: Meta<NoticeProps> = {
  title: "Atoms/Notice",
  component: Notice,
  argTypes: {
    type: { type: 'string' },
    children: { type: 'string' },
    className: { type: 'string' },
    message: { type: 'string' },
    onClose: { type: 'function' }
  },
};

export default meta;

export const Primary: StoryObj<NoticeProps> = {
  args: {
    message: 'Alerta',
    type: 'alert',
    onClose: () => console.log('Executou')
  },
};

export const Error: StoryObj<NoticeProps> = {
  args: {
    message: 'Alerta',
    type: 'error',
    onClose: () => console.log('Executou')
  },
};

export const Success: StoryObj<NoticeProps> = {
  args: {
    message: 'Alerta',
    type: 'success',
    onClose: () => console.log('Executou')
  },
};




