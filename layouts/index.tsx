import { Footer, Header } from '@/components/organisms'
import { Fragment, ReactNode } from 'react'
import Meta from './meta'
import { ScrollTop } from 'primereact/scrolltop'
import Script from 'next/script'

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <Fragment>
    <Meta title={title} description="" />
    <Script src="https://unpkg.com/react/umd/react.production.min.js" />
    <Script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js" />
    <Script src="https://unpkg.com/@babel/standalone/babel.min.js" />
    <Script src="https://unpkg.com/react-transition-group@4.4.2/dist/react-transition-group.js" />
    <Script src="https://unpkg.com/primereact/core/core.min.js" />
    <Script src="https://unpkg.com/primereact/slider/slider.min.js" />
    <Header />
    {children}
    <ScrollTop />
    <Footer />
  </Fragment>
)

export default Layout
