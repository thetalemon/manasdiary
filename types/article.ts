type Icon = {
  type: string
  value: string
}

export type Tag = {
  _id: string
  name: string
  slug: string
}

export type Article = {
  _id: string
  icon: Icon
  title: string
  summary: string
  slug: string
  body: string
  tags: Tag[]
  publishDate: string
}
