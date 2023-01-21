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
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link
        href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="https://unpkg.com/primeicons/primeicons.css" />
      <link
        rel="stylesheet"
        href="https://unpkg.com/primereact/resources/themes/lara-light-indigo/theme.css"
      />
      <link rel="stylesheet" href="https://unpkg.com/primereact/resources/primereact.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/primeflex@3.2.1/primeflex.min.css" />
    </NextHead>
  )
}

export default Meta
