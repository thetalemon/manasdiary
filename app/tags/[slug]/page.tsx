import { getTags, getArticleByTag, getTagBySlug } from '@/lib/newt'
import type { Article } from '@/types/article'
import { DefaultLayout } from '@/app/components/layouts/defaultLayout'
import { myUrl, mySiteName } from '@/constants/constants'
import { createTitle, createOgImgUrl } from '@/app/util/metadata'
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

  const title = createTitle(tag.name)
  const ogTitle = `${tag.name}の記事一覧`
  const description = `${tag.name}の記事一覧`
  const thisPageUrl = `${myUrl}/tags/${tag.slug}`

  const metadata: Metadata = {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: thisPageUrl,
      siteName: mySiteName,
      locale: 'ja_JP',
      type: 'website',
      images: [createOgImgUrl(ogTitle)],
    },
    twitter: {
      card: 'summary',
      title: title,
      description: description,
      site: '@thetalemon',
      creator: '@thetalemon',
      images: [createOgImgUrl(ogTitle)],
    },
    alternates: {
      canonical: thisPageUrl,
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
