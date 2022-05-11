import { Fragment } from 'react'
import Head from 'next/head'
import { getDatabase, getPage, getBlocks } from '@/lib/notion'
import Article from '@/components/content/Article'
import Link from 'next/link'
import { databaseId } from './index.js'
import { getSlug } from '@/lib/utils'

export default function Post({ page, blocks }) {
  if (!page || !blocks) {
    return <div />
  }

  return (
    <div className="bg-gray-900 text-gray-200">
      <Head>
        <title>{page.properties.Name.title[0].plain_text}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Article page={page} blocks={blocks} />
    </div>
  )
}

export const getStaticPaths = async () => {
  const database = await getDatabase(databaseId)
  const paths = database.map((page) => ({
    params: {
      slug: getSlug(page),
    },
  }))
  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const { slug } = context.params
  const database = await getDatabase(databaseId)
  const page = database.find((page) => getSlug(page) === slug)
  const blocks = await getBlocks(page.id)

  // Retrieve block children for nested blocks (one level deep), for example toggle blocks
  // https://developers.notion.com/docs/working-with-page-content#reading-nested-blocks
  const childBlocks = await Promise.all(
    blocks
      .filter((block) => block.has_children)
      .map(async (block) => {
        return {
          id: block.id,
          children: await getBlocks(block.id),
        }
      })
  )
  const blocksWithChildren = blocks.map((block) => {
    // Add child blocks if the block should contain children but none exists
    if (block.has_children && !block[block.type].children) {
      block[block.type]['children'] = childBlocks.find((x) => x.id === block.id)?.children
    }
    return block
  })

  return {
    props: {
      page,
      blocks: blocksWithChildren,
    },
    revalidate: 1,
  }
}
