import { Home } from '@/components/templates'
import { ReactElement } from 'react'
import Layout from '../layouts'
import { NextPageWithLayout } from './_app'

const HomePage: NextPageWithLayout = () => {
  return <Home />
}
HomePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default HomePage
