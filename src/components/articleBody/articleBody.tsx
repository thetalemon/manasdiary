import type { Article } from '@/types/article'
import styles from './articleBody.module.scss'
import { TagList } from '../tagList/tagList'
import { Frame } from '../frame/frame'
import { format } from 'date-fns'

interface Props {
  article: Article
}

export function ArticleBody({ article }: Props) {
  return (
    <Frame>
      <h1>
        {article.icon.value} {article.title}
      </h1>
      <section className={styles.articleInfo}>
        <p>{format(new Date(article.publishDate), 'yyyy/MM/dd')}</p>
        <TagList tags={article.tags} />
      </section>
      <section className={styles.mainContents}>
        <div dangerouslySetInnerHTML={{ __html: article.body }} />
      </section>
    </Frame>
  )
}
