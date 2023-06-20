import { Meta } from '@storybook/react'
import { Frame } from './frame'

export default {
  title: 'Components/Frame',
  component: Frame,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Frame>

export const Primary = {
  args: {
    children: <div>aaa</div>,
    dense: true,
  },
}
