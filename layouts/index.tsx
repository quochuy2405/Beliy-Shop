import Header from '@/components/organisms/Header'
import { Fragment, ReactNode } from 'react'
import Meta from './meta'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <Fragment>
    <Meta title={title} description="" />
    <Header />
    {children}
  </Fragment>
)

export default Layout
