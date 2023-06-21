import { getArticles } from '@/lib/newt'
import type { Article } from '@/types/article'
import { DefaultLayout } from '@/app/components/layouts/defaultLayout'
import { ArticleList } from '@/app/components/articleList/articleList'
import {
  myUrl,
  mySiteDefaultDescription,
  mySiteName,
} from '@/constants/constants'
import type { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    title: {
      default: mySiteName,
      template: `%s - ${mySiteName}`,
    },
    description: mySiteDefaultDescription,
    openGraph: {
      title: mySiteName,
      description: mySiteDefaultDescription,
      url: myUrl,
      siteName: mySiteName,
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: mySiteName,
      description: mySiteDefaultDescription,
      site: '@thetalemon',
      creator: '@thetalemon',
    },
    alternates: {
      canonical: myUrl,
    },
  }

  return metadata
}

export default async function Home() {
  const articles: Article[] = await getArticles()
  return (
    <>
      <DefaultLayout>
        <h1>{mySiteName}</h1>
        <ArticleList artcileList={articles} />
      </DefaultLayout>
    </>
  )
}
