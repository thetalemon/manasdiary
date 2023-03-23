import type { Tag } from '@/types/article'
import styles from './tagList.module.scss'
import { MyLink } from '@/src/components/myLink/myLink'

interface Props {
  tags: Tag[]
}

export function TagList({ tags }: Props) {
  return (
    <ul className={styles.root}>
      {tags.map((tag) => {
        return (
          <li key={tag.slug}>
            <MyLink href={`/tags/${tag.slug}`} text={`#${tag.name}`} />
          </li>
        )
      })}
    </ul>
  )
}
