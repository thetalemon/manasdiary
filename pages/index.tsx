import { getArticles } from '@/lib/newt'
import type { Article } from '@/types/article'
import { DefaultLayout } from '@/src/layouts/defaultLayout'
import { ArticleList } from '@/src/components/articleList/articleList'
import {
  myUrl,
  mySiteDefaultDescription,
  mySiteName,
} from '@/constants/constants'

export default function Home({ articles }: { articles: Article[] }) {
  return (
    <>
      <DefaultLayout
        title={mySiteName}
        description={mySiteDefaultDescription}
        url={myUrl}
      >
        <h1>{mySiteName}</h1>
        <ArticleList artcileList={articles} />
      </DefaultLayout>
    </>
  )
}

export const getStaticProps = async () => {
  const articles = await getArticles()
  return {
    props: {
      articles,
    },
  }
}
