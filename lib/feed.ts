import { Feed } from 'feed'
import { getArticles } from '@/lib/newt'
import { myUrl, myName, mySiteName, myCopyLight } from '@/constants/constants'

export const generateFeed = async () => {
  const baseUrl = myUrl

  const feed = new Feed({
    title: mySiteName,
    description: '',
    id: baseUrl,
    link: baseUrl,
    language: 'ja',
    copyright: myCopyLight,
    updated: new Date(),
    author: {
      name: myName,
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
