import { Footer, Header } from '@/components/organisms'
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
    <Footer />
  </Fragment>
)

export default Layout
