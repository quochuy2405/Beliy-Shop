import { About } from '@/components/templates'
import Layout from '@/layouts/index'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '../_app'

const AboutPage: NextPageWithLayout = () => {
  return <About />
}
AboutPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
export default AboutPage
