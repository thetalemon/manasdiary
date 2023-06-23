import { NextApiHandler } from 'next'
import { generateFeed } from '@/lib/feed'

export const handler: NextApiHandler = async (req, res) => {
  const xml = await generateFeed()

  res.statusCode = 200
  res.setHeader('Cache-Control', 's-maxage=86400, stale-while-revalidate')
  res.setHeader('Content-Type', 'text/xml')
  res.end(xml)
}

export default handler
