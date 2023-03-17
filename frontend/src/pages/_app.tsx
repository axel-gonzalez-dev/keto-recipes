import '@/styles/global.css'
import type { AppProps } from 'next/app'

// Import layout component
import Layout from '@/components/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
