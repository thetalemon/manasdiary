import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { getArticles } from '@/lib/newt'
import type { ArticleSummary } from '@/types/article'

export default function Home({ articles }: { articles: ArticleSummary[] }) {
  return (
    <>
      <Head>
        <title>manas diary</title>
        <meta name="description" content="まなさすの日記。やったこと、読んだ本、色々。" />
      </Head>
      <main className={styles.main}>
        <h1>manas diary</h1>
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