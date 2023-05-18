import { createClient } from 'newt-client-js'
import type { Article, Tag } from '@/types/article'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const getArticles = async () => {
  const { items } = await client.getContents<Article>({
    appUid: 'manas-diary',
    modelUid: 'article',
    query: {
      select: [
        '_id',
        'title',
        'slug',
        'tags',
        'body',
        'icon',
        'summary',
        'publishDate',
      ],
    },
  })
  return items
}

export const getArticleBySlug = async (slug: string) => {
  const article = await client.getFirstContent<Article>({
    appUid: 'manas-diary',
    modelUid: 'article',
    query: {
      slug,
      select: [
        '_id',
        'title',
        'slug',
        'tags',
        'body',
        'icon',
        'summary',
        'publishDate',
      ],
    },
  })
  return article
}

export const getTags = async () => {
  const { items } = await client.getContents<Tag>({
    appUid: 'manas-diary',
    modelUid: 'tag',
    query: {
      select: ['_id', 'name', 'slug'],
    },
  })
  return items
}

export const getTagBySlug = async (slug: string) => {
  const item = await client.getFirstContent<Tag>({
    appUid: 'manas-diary',
    modelUid: 'tag',
    query: {
      slug,
      select: ['_id', 'name', 'slug'],
    },
  })
  return item
}

export const getArticleByTag = async (slug: string) => {
  const { items } = await client.getContents<Article>({
    appUid: 'manas-diary',
    modelUid: 'article',
    query: {
      select: ['_id', 'title', 'slug', 'tags', 'body', 'icon', 'summary'],
    },
  })

  const tagItems = items.filter(
    (item) => item.tags.filter((tag) => tag.slug === slug).length
  )

  return tagItems
}
