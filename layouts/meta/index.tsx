import NextHead from 'next/head'

interface MetaProps {
  title: string
  description: string
  image?: string
}

function Meta({ title, description, image = '../../assets/default-user.png' }: MetaProps) {
  return (
    <NextHead>
      <title>{title}</title>
      <meta key="meta-title" name="title" content={title} />
      <meta key="meta-description" name="description" content={description} />
      <meta key="meta-og:type" property="og:type" content="website" />
      <meta key="meta-og:title" property="og:title" content={title} />
      <meta key="meta-og:description" property="og:description" content={description} />
      <meta key="meta-og:image" property="og:image" content={image} />
      <meta key="meta-twitter:card" property="twitter:card" content="summary_large_image" />
      <meta key="meta-twitter:title" property="twitter:title" content={title} />
      <meta key="meta-twitter:description" property="twitter:description" content={description} />
      <meta key="meta-twitter:image" property="twitter:image" content={image} />
      <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css"
      />
      <link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/primeflex@3.2.1/primeflex.min.css" />
      <script src="https://unpkg.com/react/umd/react.production.min.js"></script>
      <script src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"></script>
      <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
      <script src="https://unpkg.com/react-transition-group@4.4.2/dist/react-transition-group.js"></script>
      <script src="https://unpkg.com/primereact/core/core.min.js"></script>
      <script src="https://unpkg.com/primereact/slider/slider.min.js"></script>
    </NextHead>
  )
}

export default Meta
