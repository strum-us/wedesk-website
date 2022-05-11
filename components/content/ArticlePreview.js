import Link from '@/components/Link'
import { Text } from '@/components/notion'
import { getPostDate, getSlug } from '@/lib/utils'

const ArticlePreview = ({ post }) => (
  <div className="p-4 md:w-1/3">
    <div className="h-full overflow-hidden rounded-lg border-2 border-gray-800">
      <img
        className="w-full object-cover object-center md:h-36 lg:h-48"
        src="https://dummyimage.com/722x402"
        alt="blog"
      />
      <div className="p-6">
        {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">CATEGORY</h2> */}
        <h1 className="title-font mb-3 text-lg font-medium text-white">
          <Link href={`/blog/${post.id}`}>
            <Text text={post.properties.Name.title} />
          </Link>
        </h1>
        <p className="mb-3 leading-relaxed">{getPostDate(post)}</p>
        <div className="flex flex-wrap items-center ">
          <Link
            href={`/blog/${getSlug(post)}`}
            className="inline-flex items-center text-indigo-400 md:mb-2 lg:mb-0"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  </div>
)

export default ArticlePreview
