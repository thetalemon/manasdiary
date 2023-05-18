import type { Tag } from '@/types/article'
import styles from './tagList.module.scss'
import Link from 'next/link'

export interface TagListProps {
  tags: Tag[]
}

export function TagList({ tags }: TagListProps) {
  return (
    <ul className={styles.root}>
      {tags.map((tag) => {
        return (
          <li key={tag.slug}>
            <Link href={`/tags/${tag.slug}`}>#{tag.name}</Link>
          </li>
        )
      })}
    </ul>
  )
}
