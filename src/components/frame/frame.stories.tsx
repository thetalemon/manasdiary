import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Frame } from './frame'

export default {
  title: 'Components/Frame',
  component: Frame,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Frame>

const Template: ComponentStory<typeof Frame> = (args) => <Frame {...args} />

export const Primary = Template.bind({})
Primary.args = {
  children: <div>aaa</div>,
  dense: true,
}
