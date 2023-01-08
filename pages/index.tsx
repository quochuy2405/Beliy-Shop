import Link from 'next/link'
import Layout from '../layouts'

const IndexPage = () => (
  <Layout title="Home">
    <p className="text-red-600">Hello Next.js 👋</p>
    <p>
      <Link href="/about">About</Link>
    </p>
  </Layout>
)

export default IndexPage
