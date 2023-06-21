import { ReactNode } from 'react'
import {
  myUrl,
  mySiteName,
  mySiteDefaultDescription,
} from '@/constants/constants'
import './globals.scss'
import type { Metadata } from 'next'

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
  return (
    <html lang='ja'>
      <body>{children}</body>
    </html>
  )
}
