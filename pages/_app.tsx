import React, { Fragment, ReactElement, ReactNode } from 'react'
import { AppProps } from 'next/app'

import '@/styles/global.css'
import { NextPage } from 'next'

export type NextPageWithLayout<T = object> = NextPage<T> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayouts = AppProps & {
  Component: NextPageWithLayout
}

function App({ Component, pageProps }: AppPropsWithLayouts) {
  const getLayout = Component.getLayout || ((page: any) => page)
  const layouts = getLayout(<Component {...pageProps} />)

  return <Fragment>{layouts}</Fragment>
}

export default App
