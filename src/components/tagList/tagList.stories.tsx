import { ComponentStory, ComponentMeta } from '@storybook/react'

import { TagList } from './tagList'

export default {
  title: 'Components/TagList',
  component: TagList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof TagList>

const Template: ComponentStory<typeof TagList> = (args) => <TagList {...args} />

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
