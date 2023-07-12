'use client'

import { useEffect, useState } from 'react'
import { mySiteName } from '@/constants/constants'
import './globals.scss'
import Link from 'next/link'

export default function MySiteName() {
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(location.pathname)
  }, [])
  return (
    <>
      {path !== '/' ? (
        <Link href='/'>{mySiteName}</Link>
      ) : (
        <h1>{mySiteName}</h1>
      )}
    </>
  )
}
