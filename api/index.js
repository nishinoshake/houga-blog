import { createClient } from 'contentful'
import { POSTS_PER_PAGE } from '@/config/constant'

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

export const fetchPosts = ({ page, tagId = null }) => {
  let param = {
    content_type: 'posts',
    order: '-fields.releaseDate',
    skip: (page - 1) * POSTS_PER_PAGE,
    limit: POSTS_PER_PAGE
  }

  if (tagId) {
    param['fields.tags.sys.id'] = tagId
  }

  return client.getEntries(param)
}

export const fetchPost = id => client.getEntry(id)

export const fetchTags = () =>
  client.getEntries({
    content_type: 'tag'
  })
