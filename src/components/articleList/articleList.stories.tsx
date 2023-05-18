import { StoryObj, Meta } from '@storybook/react'
import { ArticleList, ArticleListProps } from './articleList'

export default {
  title: 'Components/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleList>

const Template: StoryObj<typeof ArticleList> = (args: ArticleListProps) => (
  <ArticleList {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  artcileList: [
    {
      _id: '01',
      icon: {
        type: 'name',
        value: '🐶',
      },
      title: 'たいとる',
      summary: 'たいとる',
      slug: 'たいとる',
      body: 'たいとる',
      tags: [
        {
          name: 'タグ１',
          slug: 'tag1',
        },
        {
          name: 'タグ２',
          slug: 'tag2',
        },
      ],
      publishDate: '2022-04-01T00:00:00.000Z',
    },
  ],
}
