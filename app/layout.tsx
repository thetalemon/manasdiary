'use client'

import { ReactNode, useEffect, useState } from 'react'
import { mySiteName, myMainUrl, myCopyLight } from '@/constants/constants'
import './globals.scss'
import Link from 'next/link'

// 本当はここにdefault metaをいれたい
// useEffectを使うと use clientが必要になり、
// use clientがあると generate metadetaが使えない

export default function RootLayout({ children }: { children: ReactNode }) {
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(location.pathname)
  }, [])
  return (
    <html lang='ja'>
      <body>
        <header>
          {path !== '/' ? (
            <Link href='/'>{mySiteName}</Link>
          ) : (
            <h1>{mySiteName}</h1>
          )}
        </header>
        <main>{children}</main>
        <footer>
          <Link href={myMainUrl}>{myCopyLight}</Link>
        </footer>
      </body>
    </html>
  )
}
