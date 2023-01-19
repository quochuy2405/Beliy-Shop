import { Product } from '@/components/templates'
import Layout from '@/layouts/index'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const ProductPage: NextPageWithLayout = () => {
  return <Product />
}
ProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default ProductPage
