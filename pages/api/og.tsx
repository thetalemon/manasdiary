import { ImageResponse } from '@vercel/og'
import { NextRequest } from 'next/server'
import { myUrl, mySiteName } from '@/constants/constants'

export const config = {
  runtime: 'experimental-edge',
}

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url)

    const hasTitle = searchParams.has('title')
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title'

    return new ImageResponse(
      (
        <div
          style={{
            backgroundImage: `url(${myUrl}/ogbg.png)`,
            backgroundColor: '#fff',
            backgroundSize: '100% 100%',
            height: '100%',
            width: '100%',
            display: 'flex',
            textAlign: 'left',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexDirection: 'column',
            flexWrap: 'nowrap',
          }}
        >
          <div
            style={{
              width: '100%',
              fontSize: 60,
              fontStyle: 'normal',
              fontWeight: 'bold',
              color: '#44617b',
              padding: '0 128px',
              lineHeight: 1.3,
              marginBottom: '32px',
              wordWrap: 'break-word',
            }}
          >
            {title}
          </div>
          <div
            style={{
              width: '100%',
              fontSize: 35,
              fontStyle: 'normal',
              color: '#44617b',
              padding: '0 128px',
              lineHeight: 1.3,
            }}
          >
            {mySiteName}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    )
  } catch (e: any) {
    console.log(`${e.message}`)
    return new Response(`Failed to generate the image`, {
      status: 500,
    })
  }
}
