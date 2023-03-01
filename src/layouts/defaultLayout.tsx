import Head from 'next/head'
import { ReactNode } from 'react'
import Link from 'next/link'

interface Props {
  title: string
  description: string
  children: ReactNode
}

export function DefaultLayout({ title, description, children }: Props) {
  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width' />
        <link rel='icon' type='image/svg+xml' href='/mylogo.ico' />
        <meta property='og:site_name' content='manas diary' />
        <meta property='og:title' content={title} />
        <meta property='og:url' content='https://diary.manasas.dev' />
        <meta property='og:description' content={description} />
        <meta
          property='og:image'
          content={`https://diary.manasas.dev/api/og?title=${title}`}
        />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <header>
        <Link href='/'>manas diary</Link>
      </header>
      <main>{children}</main>
      <footer>
        <Link href='https://manasas.dev/'>© 2023 Manami SASAKI</Link>
      </footer>
    </>
  )
}
