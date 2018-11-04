import { createClient } from 'contentful'
import { POSTS_PER_PAGE } from '@/config/constant'

const client = createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN
})

export const fetchAllPosts = () =>
  client.getEntries({
    content_type: 'post',
    order: '-fields.releaseDate',
    limit: 1000
  })

export const fetchPosts = page =>
  client.getEntries({
    content_type: 'post',
    order: '-fields.releaseDate',
    skip: (page - 1) * POSTS_PER_PAGE,
    limit: POSTS_PER_PAGE
  })

export const fetchPostsByTagId = (id, page) =>
  client.getEntries({
    content_type: 'post',
    'fields.tags.sys.id': id,
    order: '-fields.releaseDate',
    skip: (page - 1) * POSTS_PER_PAGE,
    limit: POSTS_PER_PAGE
  })

export const fetchPost = id => client.getEntry(id)

export const fetchTags = () =>
  client.getEntries({
    content_type: 'tag'
  })
