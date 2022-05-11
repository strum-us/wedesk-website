import { Fragment } from 'react'
import Link from 'next/link'
import styles from '@/css/post.module.css'
import Text from './Text'
import { renderBlock, renderNestedList } from './index'

export const Paragraph = ({ value }) => (
  <p>
    <Text text={value.rich_text} />
  </p>
)

export const Heading_1 = ({ value }) => (
  <h1>
    <Text text={value.rich_text} />
  </h1>
)

export const Heading_2 = ({ value }) => (
  <h2>
    <Text text={value.rich_text} />
  </h2>
)

export const Heading_3 = ({ value }) => (
  <h3>
    <Text text={value.rich_text} />
  </h3>
)

export const Bulleted_list_item = ({ value }) => (
  <li>
    <Text text={value.rich_text} />
    {!!value.children && renderNestedList(value)}
  </li>
)

export const Numbered_list_item = Bulleted_list_item

export const To_do = ({ value }) => (
  <div>
    <label htmlFor={value.id}>
      <input type="checkbox" id={value.id} defaultChecked={value.checked} />{' '}
      <Text text={value.rich_text} />
    </label>
  </div>
)

export const Toggle = ({ value }) => (
  <details>
    <summary>
      <Text text={value.rich_text} />
    </summary>
    {value.children?.map((block) => (
      <Fragment key={block.id}>{renderBlock(block)}</Fragment>
    ))}
  </details>
)
export const Child_page = ({ value }) => <p>{value.title}</p>

export const Image = ({ value }) => {
  const src = value.type === 'external' ? value.external.url : value.file.url
  const caption = value.caption ? value.caption[0]?.plain_text : ''
  return (
    <figure>
      <img src={src} alt={caption} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}

export const Quote = ({ value }) => (
  <blockquote key={value.id}>{value.rich_text[0].plain_text}</blockquote>
)

export const Divider = ({ value }) => <hr key={value.id} />

export const Code = ({ value }) => (
  <pre className={styles.pre}>
    <code className={styles.code_block} key={value.id}>
      {value.rich_text[0].plain_text}
    </code>
  </pre>
)

export const File = ({ value }) => {
  const src_file = value.type === 'external' ? value.external.url : value.file.url
  const splitSourceArray = src_file.split('/')
  const lastElementInArray = splitSourceArray[splitSourceArray.length - 1]
  const caption_file = value.caption ? value.caption[0]?.plain_text : ''
  return (
    <figure>
      <div className={styles.file}>
        📎{' '}
        <Link href={src_file} passHref>
          {lastElementInArray.split('?')[0]}
        </Link>
      </div>
      {caption_file && <figcaption>{caption_file}</figcaption>}
    </figure>
  )
}

export const Bookmark = ({ value }) => (
  <a href={value.url} target="_brank" className={styles.bookmark}>
    {value.url}
  </a>
)
