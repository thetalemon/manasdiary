'use client'

import { ReactNode, useEffect, useState } from 'react'
import {
  myUrl,
  mySiteName,
  mySiteDefaultDescription,
  myMainUrl,
  myCopyLight,
} from '@/constants/constants'
import './globals.scss'
import type { Metadata } from 'next'
import Link from 'next/link'

export async function generateMetadata(): Promise<Metadata> {
  const metadata: Metadata = {
    title: {
      default: mySiteName,
      template: `%s - ${mySiteName}`,
    },
    description: mySiteDefaultDescription,
    openGraph: {
      title: mySiteName,
      description: mySiteDefaultDescription,
      url: myUrl,
      siteName: mySiteName,
      locale: 'ja_JP',
      type: 'website',
    },
    twitter: {
      card: 'summary',
      title: mySiteName,
      description: mySiteDefaultDescription,
      site: '@thetalemon',
      creator: '@thetalemon',
    },
    alternates: {
      canonical: myUrl,
    },
  }

  return metadata
}

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
