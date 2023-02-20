import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { getArticles } from '@/lib/newt'
import type { Article } from '@/types/article'
import { DefaultLayout } from '@/src/layouts/defaultLayout'
import { TagList } from '@/src/components/tagList/tagList'

export default function Home({ articles }: { articles: Article[] }) {
  return (
    <>
      <DefaultLayout
        title='manas diary'
        description='まなさすの日記。やったこと、読んだ本、色々。'
      >
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
                    <p className={styles.cardSummary}>{article.summary}</p>
                    <TagList tags={article.tags} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </section>
      </DefaultLayout>
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
