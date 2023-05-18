import { StoryObj, Meta } from '@storybook/react'
import { ArticleBody, ArticleBodyProps } from './articleBody'

export default {
  title: 'Components/ArticleBody',
  component: ArticleBody,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof ArticleBody>

const Template: StoryObj<typeof ArticleBody> = (args: ArticleBodyProps) => (
  <ArticleBody {...args} />
)

export const Primary = Template.bind({})
Primary.args = {
  article: {
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
}
