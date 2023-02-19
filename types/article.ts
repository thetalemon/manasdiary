
type Icon = {
  type:string
  value:string
}

type Article = {
  _id: string
  icon: Icon
  title: string
  slug: string
  tags: string[]
  publishdate: string[]
}

export type ArticleSummary = Article & {
  summary: string
}

export type ArticleDetail = Article & {
  body: string
}