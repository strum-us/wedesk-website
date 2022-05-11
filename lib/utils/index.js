import slugify from 'slugify'

export const getPostDate = (post) => {
  const date = new Date(post.last_edited_time).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })
  return date
}

export const getSlug = (page) => slugify(page.properties.Name.title[0].plain_text).toLowerCase()
