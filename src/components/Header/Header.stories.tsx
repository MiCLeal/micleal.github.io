import * as React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'
import Header from './Header'

export default {
  component: Header,
  title: 'particles/Header'
} as Meta

const Template: Story = (args) => <Header {...args} />

export const HeaderArgs = Template.bind({})