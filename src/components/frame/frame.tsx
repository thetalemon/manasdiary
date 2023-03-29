import styles from './frame.module.scss'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  dense?: Boolean
}

export function Frame({ children, dense }: Props) {
  return (
    <div className={`${styles.root} ${dense && styles.dense}`}>{children}</div>
  )
}
