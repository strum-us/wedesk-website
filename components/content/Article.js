import { Text, renderBlock } from '@/components/notion'
import { Fragment } from 'react'
import Link from '@/components/Link'
import styles from '@/css/post.module.css'

const Article = ({ page, blocks }) => {
  const coverImageUrl = page?.cover?.external?.url || '/images/gradient.svg'
  return (
    <div className="mx-auto flex w-3/4 flex-col ">
      <article className="blogPost">
        <img
          className="w-full object-cover object-center md:h-36 lg:h-48"
          src={coverImageUrl}
          alt="cover image"
        />
        <h1 className={styles.name}>
          <Text text={page.properties.Name.title} />
        </h1>
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
