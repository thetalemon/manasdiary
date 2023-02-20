type Icon = {
  type: string
  value: string
}

export type Tag = {
  name: string
  slug: string
}

export type Article = {
  _id: string
  icon: Icon
  title: string
  summary: string
  slug: string
  tags: Tag[]
  publishdate: string[]
}

export type ArticleDetail = Article & {
  body: string
}
