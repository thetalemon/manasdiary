import { getTags, getArticleByTag, getTagBySlug } from '@/lib/newt'
import type { Article, Tag } from '@/types/article'
import { DefaultLayout } from '@/src/layouts/defaultLayout'
import { myUrl, mySiteDefaultDescription } from '@/constants/constants'
import { ArticleList } from '@/src/components/articleList/articleList'

export default function Article({
  articles,
  tag,
}: {
  articles: Article[]
  tag: Tag
}) {
  return (
    <>
      <DefaultLayout
        title={`${tag.name}の記事一覧`}
        description={mySiteDefaultDescription}
        url={myUrl}
      >
        <h2>#{tag.name}</h2>
        <ArticleList artcileList={articles} />
      </DefaultLayout>
    </>
  )
}

export const getStaticPaths = async () => {
  const tagList = await getTags()
  return {
    paths: tagList.map((tag) => ({
      params: {
        slug: tag.slug,
      },
    })),
    fallback: false,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const { slug } = params
  const tag = await getTagBySlug(slug)
  if (!tag) {
    //404にしたい
    return {
      notFound: true,
    }
  }
  const articles = await getArticleByTag(tag?._id)
  return {
    props: {
      articles,
      tag,
    },
  }
}
