import Head from 'next/head'
import Link from '@/components/Link'
import Footer from '@/components/content/Footer'
import Header from '@/components/content/HeaderLite'
import ArticlePreview from '@/components/content/ArticlePreview'
import { getDatabase } from '@/lib/notion'

export const databaseId = process.env.NOTION_DATABASE_ID

const Blog = ({ posts }) => {
  return (
    <div className="bg-gray-900 text-gray-200">
      <Head>
        <title>Blog - WeDesk</title>
      </Head>
      <Header />

      <section className="body-font bg-gray-900 text-gray-400">
        <div className="container mx-auto px-5 py-5">
          <div className="-m-4 flex flex-wrap">
            {posts.map((post) => (
              <ArticlePreview key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export const getStaticProps = async () => {
  const database = await getDatabase(databaseId)
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  }
}

export default Blog
