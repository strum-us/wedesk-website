import { Text, renderBlock } from '@/components/notion'
import { Fragment } from 'react'
import Link from '@/components/Link'
import styles from '@/css/post.module.css'

const Article = ({ page, blocks }) => {
  const coverImageUrl = page?.cover?.external?.url || '/images/gradient.svg'
  return (
    <div className="mx-auto flex w-3/4 flex-col ">
      <article className="blogPost">
        <h1 className={styles.name}>
          <Text text={page.properties.Name.title} />
        </h1>
        <img
          className="lg:h-64x w-full rounded-lg object-cover object-center md:h-96"
          src={coverImageUrl}
          alt="cover image"
        />
        <section>
          {blocks.map((block) => (
            <Fragment key={block.id}>{renderBlock(block)}</Fragment>
          ))}
          <Link href="/blog">← Go back</Link>
        </section>
      </article>
    </div>
  )
}

export default Article
