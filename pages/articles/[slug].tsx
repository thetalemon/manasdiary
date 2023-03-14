import styles from '@/styles/Home.module.scss'
import { getArticles, getArticleBySlug } from '@/lib/newt'
import type { Article } from '@/types/article'
import { DefaultLayout } from '@/src/layouts/defaultLayout'
import { myUrl, mySiteName } from '@/constants/constants'
import { TagList } from '@/src/components/tagList/tagList'

export default function Article({ article }: { article: Article }) {
  return (
    <>
      <DefaultLayout
        title={`${article.title} | ${mySiteName}`}
        description={article.summary}
        url={`${myUrl}/articles/${article.slug}`}
      >
        <h1>
          {article.icon.value} {article.title}
        </h1>
        <section className={styles.articleInfo}>
          <TagList tags={article.tags} />
        </section>
        <section className={styles.mainContents}>
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </section>
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
