import { Store } from '@/components/templates'
import Layout from '@/layouts/index'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const StorePage: NextPageWithLayout = () => {
  return <Store />
}
StorePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default StorePage
