import Link from 'next/link'
import { useRouter } from 'next/router'

interface Props {
  href: string
  text: string
}

export function MyLink({ href, text }: Props) {
  const router = useRouter()
  const path = router.asPath

  return path !== href ? <Link href={href}>{text}</Link> : <p>{text}</p>
}
