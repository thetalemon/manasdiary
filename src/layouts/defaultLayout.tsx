import Head from 'next/head'
import styles from '@/styles/layout.module.css'
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
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <header>
        <h1>Mana's sandbox</h1>
      </header>
      <main className={styles.main}>{children}</main>

      <footer>
        <Link href='https://manasas.dev/'>© 2023 Manami SASAKI</Link>
      </footer>
    </>
  )
}
