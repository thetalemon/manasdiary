import { createClient } from 'newt-client-js'
import type { ArticleSummary, ArticleDetail } from '@/types/article'

const client = createClient({
  spaceUid: process.env.NEWT_SPACE_UID + '',
  token: process.env.NEWT_CDN_API_TOKEN + '',
  apiType: 'cdn',
})

export const getArticles = async () => {
    const { items } = await client.getContents<ArticleSummary>({
    appUid: 'manas-diary',
    modelUid: 'article',
    query: {
        select: ['_id', 'title', 'slug', 'icon','summary'],
    },
    })
    return items
}

export const getArticleBySlug = async (slug: string) => {
    const article = await client.getFirstContent<ArticleDetail>({
    appUid: 'manas-diary',
    modelUid: 'article',
    query: {
        slug,
        select: ['_id', 'title', 'slug', 'body', 'icon'],
    },
    })
    return article
}