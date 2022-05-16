import Link from '@/components/Link'
import { Text } from '@/components/notion'
import { getPostDate, getSlug } from '@/lib/utils'

const ArticlePreview = ({ post }) => {
  const category = post.properties?.Category?.title || 'Uncategorized'
  const coverImageUrl = post?.cover?.external?.url || '/images/gradient.svg'
  return (
    <div className="p-4 md:w-1/3">
      <Link href={`/blog/${getSlug(post)}`}>
        <div className="h-full overflow-hidden rounded-lg border-2 border-gray-800">
          <img
            className="w-full object-cover object-center md:h-36 lg:h-48"
            src={coverImageUrl}
            alt="cover image"
          />
          <div className="p-6">
            <h2 className="title-font mb-1 text-xs font-medium uppercase tracking-widest text-gray-500">
              {category}
            </h2>
            <h1 className="title-font mb-3 text-lg font-medium text-white">
              <Text text={post.properties.Name.title} />
            </h1>
            <p className="mb-3 leading-relaxed">{getPostDate(post)}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ArticlePreview
