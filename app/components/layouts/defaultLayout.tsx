'use client'

import { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import { myMainUrl, mySiteName, myCopyLight } from '@/constants/constants'

interface Props {
  children: ReactNode
}

export function DefaultLayout({ children }: Props) {
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(location.pathname)
  }, [])

  return (
    <>
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
    </>
  )
}
