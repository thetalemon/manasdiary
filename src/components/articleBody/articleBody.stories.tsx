import { ComponentStory, ComponentMeta } from '@storybook/react'
import { ArticleBody } from './articleBody'

export default {
  title: 'Components/ArticleBody',
  component: ArticleBody,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleBody>

const Template: ComponentStory<typeof ArticleBody> = (args) => (
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
    publishDate: 'たいとる',
  },
}
