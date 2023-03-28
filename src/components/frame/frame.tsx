import styles from './frame.module.scss'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

export function Frame({ children }: Props) {
  return <div className={styles.root}>{children}</div>
}
