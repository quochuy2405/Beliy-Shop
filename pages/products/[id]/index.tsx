import { DetailProduct } from '@/components/templates'
import Layout from '@/layouts/index'
import { NextPageWithLayout } from '@/pages/_app'
import { ReactElement } from 'react'

const DetailProductPage: NextPageWithLayout = () => {
  return <DetailProduct />
}
DetailProductPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default DetailProductPage
