import Head from 'next/head'
import { ReactNode, useEffect, useState } from 'react'
import Link from 'next/link'
import {
  myUrl,
  myMainUrl,
  myDomain,
  mySiteName,
  myCopyLight,
} from '@/constants/constants'

interface Props {
  title: string
  description: string
  url: string
  children: ReactNode
}

export function DefaultLayout({ title, description, children, url }: Props) {
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(location.pathname)
  }, [])

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width' />
        <link rel='icon' type='image/svg+xml' href='/mylogo.ico' />
        <meta property='og:site_name' content={mySiteName} />
        <meta property='og:title' content={title} />
        <meta property='og:url' content={url} />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={`${myUrl}/api/og?title=${title}`} />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:site' content='@thetalemon' />
        <meta name='twitter:domain' content={myDomain} />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:image' content={`${myUrl}/api/og?title=${title}`} />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
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
