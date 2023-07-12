import { ReactNode } from 'react'
import { myMainUrl, myCopyLight } from '@/constants/constants'
import './globals.scss'
import Link from 'next/link'
import MySiteName from '@/app/components/header/mySiteName/mySiteName'

// 本当はここにdefault metaをいれたい
// useEffectを使うと use clientが必要になり、
// use clientがあると generate metadetaが使えない

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ja'>
      <body>
        <header>
          <MySiteName />
        </header>
        <main>{children}</main>
        <footer>
          <Link href={myMainUrl}>{myCopyLight}</Link>
        </footer>
      </body>
    </html>
  )
}
