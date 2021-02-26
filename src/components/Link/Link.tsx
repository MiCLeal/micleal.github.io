import * as React from 'react'
import { A } from './Link.styles'

interface Links {
  href: any
  content: any
}

const Link: React.FC<Links> = ({href, content, ...args}) => (
  <A href={href}>
    {content}
  </A>
)

export default Link
