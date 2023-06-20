import { getArticles, getArticleBySlug } from '@/lib/newt'
import type { Article } from '@/types/article'
import { DefaultLayout } from '@/app/components/layouts/defaultLayout'
import { myUrl, mySiteName } from '@/constants/constants'
import { ArticleBody } from '@/app/components/articleBody/articleBody'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export const generateStaticParams = async () => {
  const articles = await getArticles()
  const paths = articles.map((article) => ({
    params: {
      slug: article.slug,
    },
  }))
  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const article = await getArticleBySlug(slug)
  if (!article) return {}

  const metadata: Metadata = {
    title: `${article.title} | ${mySiteName}`,
    description: article.summary,
    openGraph: {
      title: `${article.title} | ${mySiteName}`,
      description: article.summary,
      url: `${myUrl}/articles/${article.slug}`,
      siteName: mySiteName,
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: `${article.title} | @{mySiteName}`,
      description: article.summary,
      site: '@thetalemon',
      creator: '@thetalemon',
    },
    alternates: {
      canonical: `${myUrl}/articles/${article.slug}`,
    },
  }

  return metadata
}

export default async function Article({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const article = await getArticleBySlug(slug)

  if (!article) notFound()

  return (
    <>
      <DefaultLayout>
        <ArticleBody article={article} />
      </DefaultLayout>
    </>
  )
}
