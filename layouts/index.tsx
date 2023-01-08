import { Fragment, ReactNode } from 'react'
import Meta from './Meta'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <Fragment>
    <Meta title={title} description="" />
    {children}
  </Fragment>
)

export default Layout
