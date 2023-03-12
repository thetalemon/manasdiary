import { Feed } from 'feed'
import { getArticles } from '@/lib/newt'

export const generateFeed = async () => {
  const baseUrl = 'https://diary.manasas.dev/'

  const feed = new Feed({
    title: 'manasdiary',
    description: '',
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    copyright: `© 2023 manasas`,
    updated: new Date(),
    author: {
      name: 'manasas',
    },
    feed: `${baseUrl}/feed`,
  })

  const posts = await getArticles()

  posts.forEach((post) => {
    const url = `${baseUrl}/articles/${post.slug}`
    feed.addItem({
      title: post.title,
      description: post.summary,
      content: post.body,
      id: url,
      link: url,
      date: new Date(post.publishDate),
    })
  })

  return feed.rss2()
}
