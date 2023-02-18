
export interface Icon {
    type:string
    value:string
}

export interface Article {
    _id: string
    icon: Icon
    title: string
    slug: string
    summary: string
    body: string
    tags: string[]
    publishdate: string[]
  }