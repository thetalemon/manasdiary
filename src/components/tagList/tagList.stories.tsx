import { StoryObj, Meta } from '@storybook/react'
import { TagList, TagListProps } from './tagList'

export default {
  title: 'Components/TagList',
  component: TagList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof TagList>

const Template: StoryObj<typeof TagList> = (args: TagListProps) => (
  <TagList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  tags: [
    {
      name: 'tag1',
      slug: 'tag1',
    },
    {
      name: 'tag2',
      slug: 'tag2',
    },
  ],
}
