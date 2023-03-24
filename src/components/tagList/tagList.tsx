import type { Tag } from '@/types/article'
import styles from './tagList.module.scss'
import Link from 'next/link'

interface Props {
  tags: Tag[]
}

export function TagList({ tags }: Props) {
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
