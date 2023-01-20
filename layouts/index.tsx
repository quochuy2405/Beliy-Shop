import { Footer, Header } from '@/components/organisms'
import { Fragment, ReactNode } from 'react'
import Meta from './meta'
import { ScrollTop } from 'primereact/scrolltop'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <Fragment>
    <Meta title={title} description="" />
    <Header />
    {children}
    <ScrollTop />
    <Footer />
  </Fragment>
)

export default Layout
