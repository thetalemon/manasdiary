import { Meta } from '@storybook/react'
import { TagList } from './tagList'

export default {
  title: 'Components/TagList',
  component: TagList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof TagList>

export const Primary = {
  args: {
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
  },
}
