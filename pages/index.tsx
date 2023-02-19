import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { getArticles } from '@/lib/newt'
import type { ArticleSummary } from '@/types/article'

export default function Home({ articles }: { articles: ArticleSummary[] }) {
  return (
    <>
      <Head>
        <title>Newt・Next.jsブログ</title>
        <meta name="description" content="NewtとNext.jsを利用したブログです" />
      </Head>
      <main className={styles.main}>
        <h1>まなさすの日記</h1>
        <section className={styles.mainContents}>
          <ul>
            {articles.map((article) => {
              return (
                <li key={article._id} className={styles.card}>
                  <Link href={`articles/${article.slug}`}>
                    <p className={styles.cardTitle}>
                      {article.icon.value} {article.title}
                    </p>
                    <p className={styles.cardSummary}>
                      {article.summary}
                    </p>
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </main>
    </>
  )
}

export const getStaticProps = async () => {
  const articles = await getArticles()
  return {
    props: {
      articles,
    },
  }
}