import { getTags, getArticleByTag, getTagBySlug } from '@/lib/newt'
import type { Article } from '@/types/article'
import { DefaultLayout } from '@/app/components/layouts/defaultLayout'
import { myUrl, mySiteName } from '@/constants/constants'
import { ArticleList } from '@/app/components/articleList/articleList'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

type Props = {
  params: { slug: string }
}

export const generateStaticParams = async () => {
  const tagList = await getTags()
  const paths = tagList.map((tag) => ({
    params: {
      slug: tag.slug,
    },
  }))

  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params
  const tag = await getTagBySlug(slug)
  if (!tag) return {}

  const metadata: Metadata = {
    title: `${tag.name}の記事一覧 | ${mySiteName}`,
    description: `${tag.name}の記事一覧`,
    openGraph: {
      title: `${tag.name} | ${mySiteName}`,
      description: `${tag.name}の記事一覧`,
      url: `${myUrl}/tags/${tag.slug}`,
      siteName: mySiteName,
      locale: 'ja_JP',
      type: 'website',
      images: [`${myUrl}/api/og?title=${tag.name}の記事一覧`],
    },
    twitter: {
      card: 'summary',
      title: `${tag.name} | ${mySiteName}`,
      description: `${tag.name}の記事一覧`,
      site: '@thetalemon',
      creator: '@thetalemon',
      images: [`${myUrl}/api/og?title=${tag.name}の記事一覧`],
    },
    alternates: {
      canonical: `${myUrl}/tags/${tag.slug}`,
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
  const tag = await getTagBySlug(slug)
  if (!tag) notFound()
  const articles = await getArticleByTag(tag?._id)
  return (
    <>
      <DefaultLayout>
        <h2>#{tag.name}</h2>
        <ArticleList artcileList={articles} />
      </DefaultLayout>
    </>
  )
}
