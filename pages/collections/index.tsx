import { Collection } from '@/components/templates'
import Layout from '@/layouts/index'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const CollectionPage: NextPageWithLayout = () => {
  return <Collection />
}
CollectionPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default CollectionPage
