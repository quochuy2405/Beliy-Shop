import { Cart } from '@/components/templates'
import Layout from '@/layouts/index'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const CartPage: NextPageWithLayout = () => {
  return <Cart />
}
CartPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default CartPage
