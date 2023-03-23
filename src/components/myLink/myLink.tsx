import { useEffect, useState } from 'react'
import Link from 'next/link'

interface Props {
  href: string
  text: string
}

export function MyLink({ href, text }: Props) {
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(location.pathname)
  }, [])

  return path !== href ? <Link href={href}>{text}</Link> : <p>{text}</p>
}
