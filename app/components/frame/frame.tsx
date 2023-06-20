import styles from './frame.module.scss'
import { ReactNode } from 'react'

export interface FrameProps {
  children: ReactNode
  dense?: Boolean
}

export function Frame({ children, dense }: FrameProps) {
  return (
    <div className={`${styles.root} ${dense && styles.dense}`}>{children}</div>
  )
}
