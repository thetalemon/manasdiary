import Link from 'next/link'

import { usePathname } from 'next/navigation'

interface Props {
  href: string
  text: string
}

export function MyLink({ href, text }: Props) {
  const path = usePathname()

  return path !== href ? <Link href={href}>{text}</Link> : <p>{text}</p>
}
