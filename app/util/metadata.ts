import { mySiteName, myUrl } from '@/constants/constants'

export const createTitle = (title: string) => {
  return `${title} | ${mySiteName}`
}

export const createOgImgUrl = (title: string) => {
  return `${myUrl}/api/og?title=${title}`
}
