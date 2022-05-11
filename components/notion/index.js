import { Fragment } from 'react'
import Link from 'next/link'
import * as allBlocks from './Blocks'
import _Text from './Text'

export const Text = _Text

function titleCase(word) {
  return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
}

export const renderNestedList = (value) => {
  if (!value) return null

  const isNumberedList = value.children[0].type === 'numbered_list_item'

  if (isNumberedList) {
    return <ol>{value.children.map((block) => renderBlock(block))}</ol>
  }
  return <ul>{value.children.map((block) => renderBlock(block))}</ul>
}

export const renderBlock = (block) => {
  const { type, id } = block
  const value = block[type]
  const key = titleCase(type)
  const BlockComponent = allBlocks[key]
  if (!BlockComponent) {
    const reason = type === 'unsupported' ? 'unsupported by Notion API' : type
    return `❌ Unsupported block (${reason})`
  }
  return (
    <Fragment key={id}>
      <BlockComponent value={value} />
    </Fragment>
  )
}
