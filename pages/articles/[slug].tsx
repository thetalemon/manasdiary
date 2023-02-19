import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { getArticles, getArticleBySlug } from '@/lib/newt'
import type { ArticleDetail } from '@/types/article'

export default function Article({ article }: { article: ArticleDetail }) {
  return (
    <>
      <Head>
        <title>{article.title}</title>
        <meta name='description' content='投稿詳細ページです' />
      </Head>
      <main className={styles.main}>
        <h1>
          {article.icon.value} {article.title}
        </h1>
        <section className={styles.mainContents}>
          <div dangerouslySetInnerHTML={{ __html: article.body }} />
        </section>
      </main>
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