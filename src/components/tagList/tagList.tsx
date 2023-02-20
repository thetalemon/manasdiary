import type { Tag } from '@/types/article'
import styles from './tagList.module.css'

interface Props {
  tags: Tag[]
}

export function TagList({ tags }: Props) {
  return (
    <ul className={styles.root}>
      {tags.map((tag) => {
        return <li key={tag.slug}>#{tag.name}</li>
      })}
    </ul>
  )
}
