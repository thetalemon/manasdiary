import type { Article } from '@/types/article'
import styles from './articleList.module.scss'
import Link from 'next/link'
import { TagList } from '@/src/components/tagList/tagList'

interface Props {
  artcileList: Article[]
}

export function ArticleList({ artcileList }: Props) {
  return (
    <ul className={styles.articleList}>
      {artcileList.map((article) => {
        return (
          <li key={article._id} className={styles.articleListItem}>
            <Link href={`/articles/${article.slug}`}>
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
  )
}
