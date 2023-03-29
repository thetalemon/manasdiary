import { getArticles, getArticleBySlug } from '@/lib/newt'
import type { Article } from '@/types/article'
import { DefaultLayout } from '@/src/layouts/defaultLayout'
import { myUrl, mySiteName } from '@/constants/constants'
import { ArticleBody } from '@/src/components/articleBody/articleBody'

export default function Article({ article }: { article: Article }) {
  return (
    <>
      <DefaultLayout
        title={`${article.title} | ${mySiteName}`}
        description={article.summary}
        url={`${myUrl}/articles/${article.slug}`}
      >
        <ArticleBody article={article} />
      </DefaultLayout>
    </>
  )
}

export const getStaticPaths = async () => {
  const articles = await getArticles()
  return {
    paths: articles.map((article) => ({
      params: {
        slug: article.slug,
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
  const article = await getArticleBySlug(slug)
  return {
    props: {
      article,
    },
  }
}
