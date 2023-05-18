import { StoryObj, Meta } from '@storybook/react'
import { Frame, FrameProps } from './frame'

export default {
  title: 'Components/Frame',
  component: Frame,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Frame>

const Template: StoryObj<typeof Frame> = (args: FrameProps) => (
  <Frame {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  children: <div>aaa</div>,
  dense: true,
}
