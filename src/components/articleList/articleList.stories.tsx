import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleList } from './articleList'

export default {
  title: 'Components/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => (
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
      publishDate: 'たいとる',
    },
  ],
}
